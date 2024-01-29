
import ServiceGym from './ServiceGym';
import styles from './ServiceActivity.module.css';
const ServiceActivity = () =>{
    return(
        <div className={ styles.container}>
            <main>
                <div className={ styles.concat}>
                    <h2>activities</h2>
                    <div className={ styles.activity_div}>
                        <div className={ styles.rectangle}>
                            <h3>mon</h3>
                            <p>5</p>
                        </div>
                        <div className={ styles.rectangle2}>
                            <h3>tue</h3>
                            <p>6</p>
                        </div>
                        <div className={ styles.rectangle3}>
                            <h3>wed</h3>
                            <p>7</p>
                        </div>
                        <div className={ styles.rectangle4}>
                            <h3>thur</h3>
                            <p>8</p>
                        </div>
                        <div className={ styles.rectangle5}>
                            <h3>fri</h3>
                            <p>9</p>
                        </div>
                        <div className={ styles.rectangle6}>
                            <h3>sat</h3>
                            <p>10</p>
                        </div>
                    </div>
                    <ServiceGym/>
                </div>
            </main>
        </div>
    )
}

export default ServiceActivity;