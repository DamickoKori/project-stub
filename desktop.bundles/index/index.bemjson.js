module.exports = {
    block: 'page',
    title: 'Modeling block',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {

            block: 'geometry',
            theme: 'light',
            content: [
                {elem: 'frame', size: 'xl'},
                {elem: 'frame', size: 'l'},
                {elem: 'frame', size: 'm', focused: true},
                {elem: 'frame', size: 's'}
            ].map(function(frame){
                frame.elemMods = {theme: 'light', size: frame.size, position: 'flex-center', focused: frame.focused};
                return frame;
            })
        },
        {
            block: 'geometry',
            content: {
                elem: 'block',
                content: [
                    {
                        block: 'button',
                        mods: {
                            theme: 'islands',
                            size: 'm',
                            type: 'link',
                            width: 'available'
                        },
                        text: 'Я существую'
                    }
                ]
            }
        }
    ].map(function(geometry){
        geometry.mods = {theme: geometry.theme, position: 'flex-center'}
        return geometry;
    })
};
