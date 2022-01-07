export const getStaticProps = async () => {
    const fixturesAPIp1 = 'https://livescore-api.com/api-client/fixtures/matches.json?&key=gHEJyJ4QGSqIuUPX&secret=8ksmR4idpMVsioSz6xiEhnvXfWGKRvHZ&competition_id=227';
    const fixturesAPIp2 = 'https://livescore-api.com/api-client/fixtures/matches.json?&key=gHEJyJ4QGSqIuUPX&secret=8ksmR4idpMVsioSz6xiEhnvXfWGKRvHZ&competition_id=227&page=2';
    const res1 = await fetch(fixturesAPIp1);
    const res2 = await fetch(fixturesAPIp2);
    const data1 = await res1.json();
    const data2 = await res2.json();

    // concatenates all fixtures
    data1.data.fixtures = data1.data.fixtures.concat(data2.data.fixtures);

    return {
        props: { matches: data1 }
    }
}



const Schedule = ({ matches: {success, data: {fixtures}} }) => {    
    return (
        <div>
            <h1>Schedule</h1>
            {success && <div className="container">
                {fixtures.map(fixture => 
                    <div className="fixture" key={fixture.id}>
                        {fixture.home_name}
                        {fixture.away_name}
                        {fixture.date}
                        {fixture.time}
                        {fixture.location}
                    </div>
                )}
            </div>}
        </div>
    );
}
 
export default Schedule;