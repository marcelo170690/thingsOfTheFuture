import React from "react";

import './css/FormPlay.css'

class GroupCards extends React.Component{

    render() {
        return (
            <div>
                <div className="description text-center mb-2">
                    <b>DESCRIPTION</b>
                    <textarea className="form-control" rows="5"/>
                </div>
                <div className="sketch text-center mb-2">
                    SKETCH
                    <img src="" alt=""/>
                </div>
                <div className="group-buttons clearfix mb-2">
                    <button className="btn btn-warning float-left m-1">
                        Refresh
                    </button>

                    <button className="btn btn-primary float-right m-1" data-toggle="modal" data-target="#sahreTwitter">
                        Share
                    </button>
                    <button className="btn btn-secondary float-right m-1">
                        Download
                    </button>
                </div>

                <div className="modal fade" id="sahreTwitter" data-backdrop="static" data-keyboard="false"
                     tabIndex="-1" role="dialog" aria-labelledby="sahreTwitterLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-info">
                                <h5 className="modal-title text-white" id="sahreTwitterLabel">Share your Futures</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="input-group mb-1">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <input type="text" placeholder="User" className="form-control"/>
                                    </div>
                                    <input type="password" placeholder="password" className="form-control mb-1"/>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GroupCards;