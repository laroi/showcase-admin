define(['text!./addItem.html','../../config/config', '../../controllers/requestController', '../../controllers/utils', '../../models/item'], function ( view, config, request, utils, Item) {
  var source   = $(view).html(),
        template = Handlebars.compile(source),
        register;
    var render = function () {
        var html = template(),
            validate,
            addItem,
            resizeImage,
            getAllAttachments;
        resizeImage = function (inWidth, inHeight, image, callback) {
        // from an input element
            var img = document.createElement("img");
            var reader = new FileReader();  
            reader.onload = function(e) {
                img.src = e.target.result
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var width = img.width;
                var height = img.height;

                if (width > height) {
                  if (width > inWidth) {
                    height *= inWidth / width;
                    width = inWidth;
                  }
                } else {
                  if (height > inHeight) {
                    width *= inHeight / height;
                    height = inHeight;
                  }
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                var dataurl = canvas.toDataURL("image/png");
                callback(dataurl);
            }
            reader.readAsDataURL(image);
        };
        validate = function() {
            isValid = true,
            highlight = function (element) {
                $(element).css('border', '1px solid red');
            },
            deHighlight = function (element) {
                $(element).css('border', '1px solid rgb(204, 204, 204)');
            };
            if ($('#title').val().length < 1) {
                isValid = false;
                highlight('#title')
            } else {
                deHighlight('#title')
            }
            if ($('#price').val().length < 1) {
                isValid = false;
                highlight('#price')
            } else {
                deHighlight('#price')
            }
            if ($('#stock').val().length < 1) {
                isValid = false;
                highlight('#stock')
            } else {
                deHighlight('#stock')
            }
            if ($('.item-type-name').html() === "Item Type") {
                isValid = false;
                highlight('#item-type')
            } else {
                deHighlight('#item-type')
            }
            if ($('.dress-type-name').html() === "Dress Type") {
                isValid = false;
                highlight('#dress-type')
            } else {
                deHighlight('#dress-type')
            }
            if ($('.material-type-name').html() === "Material Type") {
                isValid = false;
                highlight('#material_type')
            } else {
                deHighlight('#material_type')
            }
            if ($('#item-image').val() === "") {
                isValid = false;
                highlight('.item-img-wrapper')
            } else {
                deHighlight('.item-img-wrapper')
            }
            return isValid;
        };
        getAllAttachments = function (callback) {
            var attachment = {}, i, imageArray = $('#item-image')[0].files, full_imgs = [];
            resizeImage(250, 350, imageArray[0], function(img) {
                attachment['thumb.jpg'] = {content_type: imageArray[0].type, data: img.substr(22, img.length)}
                for (i = 0 ; i < imageArray.length; i += 1) {
                    (function(index){
                        resizeImage(1024, 768, imageArray[index], function(img){
                            full_imgs.push(imageArray[index].name)
                            attachment[imageArray[index].name] = {content_type: imageArray[index].type, data: img.substr(22, img.length)}
                            if (index === imageArray.length - 1) {
                                callback(attachment, full_imgs);
                            }
                        })
                    })(i)
                    
                }
            });
        }
        addItem = function (e) {
            var item = new Item()
            item.dates = {addedOn: utils.dates().getISODate(), lastModifiedOn: utils.dates().getISODate()}
            item.description = $('#description').val().trim();
            item.title = $('#title').val().trim();
            item.price = $('#price').val().trim();
            item.stock = $('#stock').val().trim();
            item.item_type = $('#item-type >.type-name').html().trim();
            item.material_type = $('#material_type >.type-name').html().trim();
            item.dress_type = $('#dress-type >.type-name').html().trim();
            item.gender_type = $('.gender-type:checked').attr('id').trim();
            getAllAttachments(function(attachments, full_imgs) {
                item._attachments = attachments;
                item.images.full = full_imgs;
                console.log(item);
                item.save();
            })
            
            
        };
        $('body').append(html);
        $('#model-add-item').modal('show');
        $('.dropdown-menu li').on('click', function(){    
            $(this).parent().prev().find('.type-name').html($(this).html());    
        })
        $('#btn-add-item').on('click', addItem)
       
    };
        return {
            render:render
        }
            
});
