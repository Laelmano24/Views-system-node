import viewsCount from "../models/views.js"

async function showViews(user) {
    const table = await viewsCount.findOne({ where: { user: user } })

    if (table) {
        const newViews = table.views + 1;
        await table.update({ views: newViews })
        return newViews
    } else {
        await viewsCount.create({
            user: user,
            views: 1
        });
        return 1;
    }
}

export default showViews