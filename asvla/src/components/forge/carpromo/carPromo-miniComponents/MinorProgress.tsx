import "./MultipleProgress.scss";

import cashIcon from "../carpromo-img/10k.png";
import cashCaseIcon from "../carpromo-img/case-10.png";

const MinorProgress: React.FC= () => {
    return (
        <div className="cash">
            <div className="cash__title">
                <img src={cashIcon} alt="" />
            </div>
            <div className="cash__icon">
                <img src={cashCaseIcon} alt="" />
            </div>
            <div className="cash__iconAmount">
                <span>0</span>
                <span>/</span>
                <span>10</span>
            </div>
        </div>
    )
}

export default MinorProgress;
