// REACT
import { BsFillCameraReelsFill, BsLayoutTextSidebarReverse } from 'react-icons/bs';
import { BsFillCameraVideoFill, BsFillCameraFill, BsFillWebcamFill, BsCameraReels, BsCamera2, BsCamera } from 'react-icons/bs';
import { BsTextCenter, BsFillChatSquareTextFill, BsFillFileEarmarkTextFill, BsBodyText, BsChatText, BsFillChatLeftTextFill } from 'react-icons/bs';

import styles from "./AnimatedIcons.module.css"

function AnimatedIcons({ moveBtn }) {
    return (
        <div className={styles.ContainerIconsAnimated}>
            {moveBtn === 60 &&
                <>
                    <div className={styles.IconsAnimatedLeft}>
                        <BsTextCenter className={styles.IconsAnimated}
                            style={{
                                top: "15px",
                                left: "25px",
                                animation: "iconAnim 4s linear 0s infinite, AnimAboutLeft 1s ease 0s"
                            }} />

                        <BsFillChatSquareTextFill className={styles.IconsAnimated}
                            style={{
                                left: "225px",
                                animation: "iconAnim 4s linear 1s infinite, AnimAboutLeft 1s ease 0s"
                            }} />

                        <BsFillFileEarmarkTextFill className={styles.IconsAnimated}
                            style={{
                                top: "100px",
                                left: "120px",
                                animation: "iconAnim 4s linear 2s infinite, AnimAboutLeft 1s ease 0s"
                            }} />

                        <BsLayoutTextSidebarReverse className={styles.IconsAnimated}
                            style={{
                                top: "130px",
                                left: "0",
                                animation: "iconAnim 4s linear 3s infinite, AnimAboutLeft 1s ease 0s"
                            }} />

                        <BsBodyText className={styles.IconsAnimated}
                            style={{
                                bottom: "140px",
                                left: "70px",
                                animation: "iconAnim 4s linear 1s infinite, AnimAboutLeft 1s ease 0s"
                            }} />

                        <BsChatText className={styles.IconsAnimated}
                            style={{
                                bottom: "110px",
                                left: "200px",
                                animation: "iconAnim 4s linear 2s infinite, AnimAboutLeft 1s ease 0s"
                            }} />

                        <BsFillChatLeftTextFill className={styles.IconsAnimated}
                            style={{
                                bottom: "0",
                                left: "120px",
                                animation: "iconAnim 4s linear 0s infinite, AnimAboutLeft 1s ease 0s"
                            }} />

                    </div>

                    <div className={styles.IconsAnimatedRight}>
                        <BsTextCenter className={styles.IconsAnimated}
                            style={{
                                top: "15px",
                                right: "200px",
                                animation: "iconAnim 4s linear 0s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsFillChatSquareTextFill className={styles.IconsAnimated}
                            style={{
                                right: "0",
                                animation: "iconAnim 4s linear 1s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsFillFileEarmarkTextFill className={styles.IconsAnimated}
                            style={{
                                top: "100px",
                                right: "100px",
                                animation: "iconAnim 4s linear 2s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsLayoutTextSidebarReverse className={styles.IconsAnimated}
                            style={{
                                top: "130px",
                                right: "220px",
                                animation: "iconAnim 4s linear 3s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsBodyText className={styles.IconsAnimated}
                            style={{
                                bottom: "140px",
                                right: "140px",
                                animation: "iconAnim 4s linear 1s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsChatText className={styles.IconsAnimated}
                            style={{
                                bottom: "110px",
                                right: "20px",
                                animation: "iconAnim 4s linear 2s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsFillChatLeftTextFill className={styles.IconsAnimated}
                            style={{
                                bottom: "0",
                                right: "100px",
                                animation: "iconAnim 4s linear 0s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                    </div>
                </>
            }

            {moveBtn === -1 &&
                <>
                    <div className={styles.IconsAnimatedLeft}>
                        <BsFillCameraReelsFill className={styles.IconsAnimated}
                            style={{
                                top: "15px",
                                left: "25px",
                                animation: "iconAnim 4s linear 0s infinite, AnimAboutLeft 1s ease 0s"
                            }} />
                        <BsFillCameraVideoFill className={styles.IconsAnimated}
                            style={{
                                left: "225px",
                                animation: "iconAnim 4s linear 1s infinite, AnimAboutLeft 1s ease 0s"
                            }} />
                        <BsFillCameraFill className={styles.IconsAnimated}
                            style={{
                                top: "100px",
                                left: "120px",
                                animation: "iconAnim 4s linear 2s infinite, AnimAboutLeft 1s ease 0s"
                            }} />
                        <BsFillWebcamFill className={styles.IconsAnimated}
                            style={{
                                top: "130px",
                                left: "0",
                                animation: "iconAnim 4s linear 3s infinite, AnimAboutLeft 1s ease 0s"
                            }} />
                        <BsCameraReels className={styles.IconsAnimated}
                            style={{
                                bottom: "140px",
                                left: "70px",
                                animation: "iconAnim 4s linear 1s infinite, AnimAboutLeft 1s ease 0s"
                            }} />
                        <BsCamera2 className={styles.IconsAnimated}
                            style={{
                                bottom: "110px",
                                left: "200px",
                                animation: "iconAnim 4s linear 2s infinite, AnimAboutLeft 1s ease 0s"
                            }} />
                        <BsCamera className={styles.IconsAnimated}
                            style={{
                                bottom: "0",
                                left: "120px",
                                animation: "iconAnim 4s linear 0s infinite, AnimAboutLeft 1s ease 0s"
                            }} />
                    </div>

                    <div className={styles.IconsAnimatedRight}>
                        <BsFillCameraReelsFill className={styles.IconsAnimated}
                            style={{
                                top: "15px",
                                right: "200px",
                                animation: "iconAnim 4s linear 0s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsFillCameraVideoFill className={styles.IconsAnimated}
                            style={{
                                right: "0",
                                animation: "iconAnim 4s linear 1s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsFillCameraFill className={styles.IconsAnimated}
                            style={{
                                top: "100px",
                                right: "100px",
                                animation: "iconAnim 4s linear 2s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsFillWebcamFill className={styles.IconsAnimated}
                            style={{
                                top: "130px",
                                right: "220px",
                                animation: "iconAnim 4s linear 3s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsCameraReels className={styles.IconsAnimated}
                            style={{
                                bottom: "140px",
                                right: "140px",
                                animation: "iconAnim 4s linear 1s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsCamera2 className={styles.IconsAnimated}
                            style={{
                                bottom: "110px",
                                right: "20px",
                                animation: "iconAnim 4s linear 2s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                        <BsCamera className={styles.IconsAnimated}
                            style={{
                                bottom: "0",
                                right: "100px",
                                animation: "iconAnim 4s linear 0s infinite, AnimAboutRight 1s ease 0s"
                            }} />
                    </div>
                </>
            }
        </div>
    )
}

export default AnimatedIcons