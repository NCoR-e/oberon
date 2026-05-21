import { Head } from "minista"

export default (props) => {
    const { 
        children, 
        title, } = props


    return (
        <>
            <Head htmlAttributes={{ lang: 'ru' }}>
                <title>Oberon | {title}</title>
                <meta name="author" content="HVR Group" />
                <link rel="icon" sizes="512x512 256x256 128x128 64x64" href="/icons/tab-icon.png"></link>
            </Head>
            <body>{children}</body>
        </>
    )
}
