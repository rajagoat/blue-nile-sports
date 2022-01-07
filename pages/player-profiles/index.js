import styles from '../../styles/PlayerProfiles.module.css'
import playerProfiles from '../../public/data/player_profiles.json'
import Image from 'next/image'

const PlayerProfiles = () => {
    return (
        <div>
            <h1 className={styles.title}>- Football Player Profiles -</h1>
            <div className={styles.gridContainer}>
                {playerProfiles && playerProfiles.map(profile =>
                    <div className={styles.gridItem} key={profile.name} onClick={() => setShowModal(true)}>
                        <Image className={styles.image} src={profile.thumbnail} alt='' layout='fill' objectFit='cover' />
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
    Team --> Club
    Matches
    Goals
    Position
    Date of Birth
    Height
    Image
    Name
    Bio
*/