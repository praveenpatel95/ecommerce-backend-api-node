const ApiError = require("../utils/ApiError");
const { User, Order, Order_Chairs, Order_Tables, Order_Tops, sequelize }
    = require('../models');

const checkoutProcess = async (data) => {
    const { name, email, cartItems } = data;

    const transaction = await sequelize.transaction();
    try {
        const user = await User.create({ name, email }, { transaction });

        const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

        const order = await Order.create({
            amount: totalAmount,
            user_id: user.id,
        }, { transaction });

        for (const item of cartItems) {
            if (item.category_id === 1) {
                await Order_Chairs.create({ order_id: order.id, chair_id: item.id },
                    { transaction });
            } else if (item.category_id === 2) {
                await Order_Tables.create({ order_id: order.id, table_id: item.id },
                    { transaction });
            } else if (item.category_id === 3) {
                await Order_Tops.create({ order_id: order.id, top_id: item.id },
                    { transaction });
            }
        }

        await transaction.commit();
        return { user, order };

    } catch (error) {
        await transaction.rollback();
        throw new ApiError(error.message, 500);
    }
};

module.exports = {
    checkoutProcess
};
