({
    block: 'b-page',
    title: 'All the URL of the planet',
    favicon: '/favicon.ico',
    js: true,
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.bemhtml.js' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', value: '' }},
        { elem: 'meta', attrs: { name: 'keywords', value: '' }}
    ],
    content: ''
})
