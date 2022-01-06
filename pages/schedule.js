export const getStaticProps = async () => {
    const fixturesAPI = 'https://livescore-api.com/api-client/fixtures/matches.json?&key=gHEJyJ4QGSqIuUPX&secret=8ksmR4idpMVsioSz6xiEhnvXfWGKRvHZ&competition_id=227';
    const res = await fetch(fixturesAPI);
    const data = await res.json();

    return {
        props: { matches: data }
    }
}

const Schedule = ({ matches: {success, data: {fixtures}} }) => {    
    console.log(fixtures);

    return (
        <div>
            <h1>Schedule</h1>
            {success && <div className="container">
                {fixtures.map(fixture => 
                    <div className="fixture" key={fixture.id}>
                        {fixture.away_name}
                        {fixture.date}
                        {fixture.home_name}
                        {fixture.location}
                        {fixture.time}
                    </div>
                )}
            </div>}
        </div>
    );
}
 
export default Schedule;