import MyColleciton from './assets/screenshots/iPhone13-MyCollection.png';
import Beans from './assets/screenshots/iPhone13-Beans.png';
import Brew from './assets/screenshots/iPhone13-Brew-Dark.png';
import Suggestions from './assets/screenshots/iPhone13-Suggestions-Dark.png';
import AppStore from './assets/Download_on_the_App_Store_Badge_blk.svg';
import GitHub from './assets/GitHub.png';
import AppIcon from './assets/icon-round.png';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="container">
            <div className="main">

            <div className="info">
                <img src={AppIcon} alt="App Icon" width={256} height={256}/>
                <h1 className="title">Brewable</h1>
                <p className="description">Brewable is an app for coffee lovers; made to help you keep track of the beans you buy and the brews you make with them.</p>
                <ul className="features">
                <li>&#128210; Keep track of your collection of coffee beans.</li>
                <li>&#9749; Record your brews by adding a device and recipe.</li>
                <li>&#11088; Rate your brews in six categories, establishing a flavor profile.</li>
                <li>&#128161; Receive suggestions for new recipes to improve your brews.</li>
                <li>&#128248; Share photos of your beans and brews.</li>
                <li>&#9200; Set daily reminders for brewing.</li>
                </ul>
                <a href="https://apps.apple.com/us/app/brewable/id1592801332">
                    <img className="app-store" src={AppStore} alt="Download on the App Store" width={200}/>
                </a>
            </div>

            <div className="screenshots">
                <img src={MyColleciton} alt="Homepage Screenshot" width={280} height={540}/>
                <img src={Beans} alt="Homepage Screenshot" width={280} height={540}/>
                <img src={Brew} alt="Homepage Screenshot" width={280} height={540}/>
                <img src={Suggestions} alt="Homepage Screenshot" width={280} height={540}/>
            </div>
            
            </div>

            <div className="footer">
            <a href="https://github.com/CJSantee/Brewable">
            Developed by
                <span class="github">
                <img src={GitHub} alt="GitHub Logo" width={16} height={16} />
                </span>Colin Santee
            </a>
            <Link to="/privacy">Privacy Policy</Link>
            </div>
        </div>
    );
}

export default Home;
