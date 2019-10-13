    module.exports = {
    block: 'page',
    title: 'Create',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'create.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'create.min.js' }],
    mods: { theme: 'islands' },
    content: [
        {

            block: 'geometry',
            theme: 'light',
            content: [
                {elem: 'frame', size: 'xl'},
                {elem: 'frame', size: 'l'},
                {elem: 'frame', size: ''},
                {elem: 'frame', size: 's', focused: true}
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
                        block: "carculator",
                        content: [
                            {
                                elem: '',
                            }
                        ]
                    }
                ]
            }
        }
    ].map(function(geometry){
        geometry.mods = {theme: geometry.theme, position: 'flex-center'}
        return geometry;
    })
};
