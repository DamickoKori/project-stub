module.exports = {
    block: 'page',
    title: 'Title of the page',
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
            block: 'background',
            mods: {theme: 'light'},
            mix: {block: 'geometry', mods: {position: 'flex-center'}},
            content: [
                {
                    elem: 'xl',
                    elemMods: {theme: 'light'},
                    mix: {block: 'geometry', mods: {position: 'flex-center'}}
                },
                {
                    elem: 'l',
                    elemMods: {theme: 'light'},
                    mix: {block: 'geometry', mods: {position: 'flex-center'}}
                },
                {
                    elem: 'm',
                    elemMods: {theme: 'light'},
                    mix: {block: 'geometry', mods: {position: 'flex-center'}}
                },
                {
                    elem: 's',
                    elemMods: {theme: 'light'},
                    mix: {block: 'geometry', mods: {position: 'flex-center'}}
                }
            ]
        },
        {
            block: 'work-area',
            content: {}
        }
    ]
};
