define(['text!./mainHeader.html','../../config/config', '../../controllers/requestController','../addItem/addItem' ], function ( view, config, request, addItem) {
 var source   = $(view).html(),
        template = Handlebars.compile(source),
        html = template(),
        render,
        addItem;
        render = function () {
            $('#main-container').html(html);
            $('#add-item').on('click', showAddItem);
        };
        showAddItem = function () {
            addItem.render();
        }
        
        return {
            render:render
        }
            
});
