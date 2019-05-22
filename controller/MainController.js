let MainLibrary = require('../library/MainLibrary')
exports.index = async function(req, res) {
    let main_library = await new MainLibrary;
    let list = await {
        controller: 'MainController',
        action: 'index'
    }
    list['mainLibrary'] = main_library.main()
    // JSONを送信する
    await res.json(list);
};
