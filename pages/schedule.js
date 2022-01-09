import styles from '../styles/Schedule.module.css'
import homeBackground from '../public/images/static/home.svg'
import awayBackground from '../public/images/static/away.svg'
import Image from 'next/image';
import Head from 'next/head';

export const getStaticProps = async () => {
    const fixturesAPIp1 = 'https://livescore-api.com/api-client/fixtures/matches.json?&key=gHEJyJ4QGSqIuUPX&secret=8ksmR4idpMVsioSz6xiEhnvXfWGKRvHZ&competition_id=227';
    const fixturesAPIp2 = 'https://livescore-api.com/api-client/fixtures/matches.json?&key=gHEJyJ4QGSqIuUPX&secret=8ksmR4idpMVsioSz6xiEhnvXfWGKRvHZ&competition_id=227&page=2';
    const res1 = await fetch(fixturesAPIp1);
    const res2 = await fetch(fixturesAPIp2);
    const data1 = await res1.json();
    const data2 = await res2.json();

    // concatenates all fixtures
    data1.data.fixtures = data1.data.fixtures.concat(data2.data.fixtures);

    // changes dates to readable versions
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    data1.data.fixtures.map(fixture => {
        let info = fixture.date.split('-');
        let time = fixture.time.split(':');
        let newDate = `${months[Number(info[1]) - 1]} ${info[2]} ${info[0]}`;
        let newTime = `${Number(time[0]) - 5}:${time[1]}:${time[2]}`;
        fixture.date = newDate;
        fixture.time = newTime;
    })

    return {
        props: { matches: data1 }
    }
}



const Schedule = ({ matches: { success, data: { fixtures } } }) => {
    return (
        <>
        <Head>
                <title>Schedule</title>
        </Head>
        <div className={styles.desktopView}>
            {success && <div className={styles.container}>
                {fixtures.map(fixture =>
                    <div className={styles.fixture} key={fixture.id}>
                        <div className={styles.home}>
                            <Image src={homeBackground} width={250} height={200} alt='' layout='fixed' />
                            <h2>{fixture.home_name}</h2>
                        </div>
                        <div className={styles.matchDetails}>
                            <h2>{fixture.date}</h2>
                            <h3>{`${fixture.time} EST`}</h3>
                            {fixture.location ?
                                <p>{fixture.location}</p>
                                :
                                <p>Not Available</p>
                            }
                        </div>
                        <div className={styles.away}>
                            <Image src={awayBackground} width={250} height={210} alt='' layout='fixed' />
                            <h2>{fixture.away_name}</h2>
                        </div>
                    </div>
                )}
            </div>}
        </div>

        <div className={styles.mobileView}>
        {success && <div className={styles.container}>
            {fixtures.map(fixture =>
                <div className={styles.fixture} key={fixture.id}>
                    <div className={styles.home}>
                        <h2>{fixture.home_name}</h2>
                    </div>
                    <div style={{margin:"6px 0 12px 0"}}>
                    versus
                    </div>
                    
                    <div className={styles.away}>
                        <h2>{fixture.away_name}</h2>
                    </div>
                    <br/>
                    <div className={styles.matchDetails}>
                        <h4>{fixture.date}</h4>
                        <h3>{`${fixture.time} EST`}</h3>
                        {fixture.location ?
                            <p>{fixture.location}</p>
                            :
                            <p>Not Available</p>
                        }
                    </div>
                </div>
            )}
        </div>}
        </div>
        </>
        

        
    );
}

export default Schedule;