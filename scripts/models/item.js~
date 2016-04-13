define(['controllers/requestController','../config/config'], function (request, config) {
    //Do setup work here
    var item = function(item_id) {
        var save = function (item_id) {
            var doc = {
                _id: item_id,
                _rev : this._rev || undefined,
                _attachments: this._attachments || {},
                dates: this.dates || {},
                description : this.description || '',
                dress_type: this.dress_type,
                gender_type: this.gender_type || '',
                item_type : this.item_type || '',
                images: this.images || {'thumb':'thumb.jpg', 'full':[]},
                material_type: this.material_type || '',
                price : this.price || 0,
                title : this.title || '',
                stock: this.stock || ''
            }
            if (!item_id) {
                request.post(config.couchdb.url(), doc, function(saveErr, saveData){
                    if (!saveErr) {
                        console.log(saveData)
                    } else {
                        console.error(saveErr);
                    }
                })
            }
        };
            return  {
                _id: item_id,
                _rev : '',
                _attachments: [],
                dates: {},
                description : '',
                dress_type: '',
                item_type:'',
                gender_type: '',
                images: {'thumb':'', 'full':[]},
                material_type: '',
                price : 0,
                title : '',
                stock: 0,
                save: save
            };
        
    };
    return item
});
