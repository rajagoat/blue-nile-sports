import styles from '../../styles/PlayerProfiles.module.css'
import playerProfiles from '../../public/data/player_profiles.json'
import Image from 'next/image'

const PlayerProfiles = () => {
    return (
        <div>
            <h1 className={styles.title}>- Football Player Profiles -</h1>
            <div className={styles.gridContainer}>
                {playerProfiles && playerProfiles.map(profile =>
                    <div className={styles.gridItem} key={profile.name}>
                        <Image className={styles.image} src={profile.thumbnail} width={381} height={600} layout='intrinsic' />
                        <div className={styles.fadeBox} />
                        <h3 className={styles.name}>{profile.name}</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PlayerProfiles;

/* 
    Statistics:
    Team
    Matches
    Goals
    Position
    Date of Birth
    Height
    Image
    Name
*/