import React, { Component } from 'react';
import img from '../../image/logo-full.svg';
import '../css/jobs.css';
import hero from '../../image/hero.svg';
import { Link } from 'react-router-dom';
class Jobs extends Component {
    state = { 
        i:0,
        clas:""
     }

    wrapperfunction = ()=>{
        let j=this.state.i;
        if(j%2===0){
            const cls = "add-class";
             j++;
            this.setState({clas:cls,i:j});
            j++;
        }
        if(j%2!==0){
            const cls = "remove-class";
            j++;
            this.setState({clas:cls,i:j});
            j++;
        }
    }
    render() { 
        return ( 
            <>
            <div className="jobs">
                <div className="jobsheader">
                    <ul>
                        <li><Link to=""><img src={img} alt="" /></Link></li>
                        <li className="job-menu">Jobs at smallcase</li>
                    </ul>
                </div>
            </div>
            <div className="job-team-help">
                <div className="job-team">
                    <div className="job-help job-hep-content">
                        <h3>Join our team and</h3>
                        <h1>Help us change how India invests</h1>
                        <p>We are headquartered in Bangalore and are a team of finance professionals, engineers & designers with diverse backgrounds and skills. See the openings below</p>
                     
                    </div>
                    <div className="job-help">
                        <img src={hero} alt="" />
 
                    </div>
                </div>


            </div>

            <div className="job-open">
                <div className="job-open-resources">
                    <div className="job-open-option" onClick={this.wrapperfunction}>
                        <p className="analyst-p">Analyst</p>
                        <p className="flr">1 open Role</p>
                    </div>
                    <div className={`additional-detail ${this.state.clas}`}>
                        <ul>
                            <li>Product Management</li>
                            <p>Lonawala || Full Time</p>
                        </ul>
                    </div>
                    <div className="business-development" onClick={this.wrapperfunction}>
                        <p className="analyst-p">Bussiness Development</p>
                        <p className="flr">4 open Role</p>
                    </div>
                    <div className={`additional-detail1 ${this.state.clas}`}>
                        <ul>
                            <li>Buisiness Development</li>
                            <p>bangalaru || Full Time</p>
                        </ul>
                    </div>
                    <div className={`additional-detail1 ${this.state.clas}`}>
                        <ul>
                            <li>Buissiness owner</li>
                            <p>bangalaru || Full Time</p>
                        </ul>
                    </div>
                    
                    <div className="job-open-option" onClick={this.wrapperfunction}>
                        <p className="analyst-p">Analyst</p>
                        <p className="flr">1 open Role</p>
                    </div>
                    <div className={`additional-detail ${this.state.clas}`}>
                        <ul>
                            <li>Product Management</li>
                            <p>Lonawala || Full Time</p>
                        </ul>
                    </div>
                    <div className="job-open-option" onClick={this.wrapperfunction}>
                        <p className="analyst-p">Analyst</p>
                        <p className="flr">1 open Role</p>
                    </div>
                    <div className={`additional-detail ${this.state.clas}`}>
                        <ul>
                            <li>Product Management</li>
                            <p>Lonawala || Full Time</p>
                        </ul>
                    </div>
                    <div className="job-open-option" onClick={this.wrapperfunction}>
                        <p className="analyst-p">Analyst</p>
                        <p className="flr">1 open Role</p>
                    </div>
                    <div className={`additional-detail ${this.state.clas}`}>
                        <ul>
                            <li>Product Management</li>
                            <p>Lonawala || Full Time</p>
                        </ul>
                    </div>
                    <div className="job-open-option" onClick={this.wrapperfunction}>
                        <p className="analyst-p">Analyst</p>
                        <p className="flr">1 open Role</p>
                    </div>
                    <div className={`additional-detail ${this.state.clas}`}>
                        <ul>
                            <li>Product Management</li>
                            <p>Lonawala || Full Time</p>
                        </ul>
                    </div>
                    <div className="job-open-option" onClick={this.wrapperfunction}>
                        <p className="analyst-p">Analyst</p>
                        <p className="flr">1 open Role</p>
                    </div>
                    <div className={`additional-detail ${this.state.clas}`}>
                        <ul>
                            <li>Product Management</li>
                            <p>Lonawala || Full Time</p>
                        </ul>
                    </div>
                    <div className="job-open-option" onClick={this.wrapperfunction}>
                        <p className="analyst-p">Analyst</p>
                        <p className="flr">1 open Role</p>
                    </div>
                    <div className={`additional-detail ${this.state.clas}`}>
                        <ul>
                            <li>Product Management</li>
                            <p>Lonawala || Full Time</p>
                        </ul>
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default Jobs;