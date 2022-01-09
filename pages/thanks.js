import Head from "next/head";

function Thanks() {

    return (
        <>
            <Head>
                <title>Thank you!</title>
            </Head>
            <h1 style={{margin:"32px"}}>Thank you for your submission</h1>
            <p style={{margin:"0 32px"}}>We will get back to you as soon as we can!</p>
        </>
    );
}
 
export default Thanks;