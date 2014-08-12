$('table tbody').sortable({
    handle: '.handler',
    opacity: 0.6,
    cursor: 'move',
    start: function (event, ui) {
        ui.item.data('prev-index', (ui.item.index() + 1));
    },
    update: function (event, ui) {
        var data = {
            prev_index: ui.item.data('prev-index'),
            new_index: (ui.item.index() + 1),
            dragged: ui.item.data('key')
        };

        console.log(event, ui);
        var url = ui.item.parents('table').data('sorting-url');

        $.post(url, data);
    }
});
