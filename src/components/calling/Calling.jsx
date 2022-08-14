import './calling.css'

const Calling = () => {
    return (
        <div className="callingContainer">
            <div className="callingHeader">
                <h1 className='callingHeader-text'>Calls</h1>
            </div>
            <div className="callingFilter">
                <div className="callingFilter-heading">
                    <p>Filter</p>
                </div>
                <div className="callingFilter-wrapper">
                    <div className="filter">
                        <div className="filterName">CALL PARTICIPANTS</div>
                        <div className="filterInput">
                            <input type="text" placeholder='Search for team members' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/575656/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filterName">COMPANY NAME</div>
                        <div className="filterInput">
                            <input type="text" placeholder='Type for search' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/575656/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filterName">WORDS</div>
                        <div className="filterInput">
                            <input type="text" placeholder='Search for words' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/575656/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filterName">TRACKERS</div>
                        <div className="filterInput">
                            <input type="text" placeholder='Select' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/575656/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filterName">SMART TRACKERS</div>
                        <div className="filterInput">
                            <input type="text" placeholder='Select' />
                            <div className="filterInputIcon">
                                <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/30/575656/external-plus-user-interface-tanah-basah-glyph-tanah-basah-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="filter">
                        <div className="filterName">&gt;Advanced</div>
                    </div>
                    <div className="filter1">
                        <div className="filtertype">
                            <div className="filterName1">Call Category</div>
                            <img src="https://img.icons8.com/ios/14/575656/collapse-arrow--v2.png" alt="" />
                        </div>
                        <div className="filterInput">
                            <input type="text" placeholder='Select' />
                        </div>
                    </div>
                    <div className="filter1">
                        <div className="filtertype">
                            <div className="filterName1">Basic Details</div>
                            <img src="https://img.icons8.com/ios/14/575656/expand-arrow--v2.png" alt="" />
                        </div>
                    </div>
                    <div className="filter1">
                        <div className="filtertype">
                            <div className="filterName1">CRM</div>
                            <img src="https://img.icons8.com/ios/14/575656/expand-arrow--v2.png" alt="" />
                        </div>
                    </div>
                    <div className="filter1">
                        <div className="filtertype">
                            <div className="filterName1">Questions</div>
                            <img src="https://img.icons8.com/ios/14/575656/expand-arrow--v2.png" alt="" />
                        </div>
                    </div>
                    <div className="filter1">
                        <div className="filtertype">
                            <div className="filterName1">Interaction</div>
                            <img src="https://img.icons8.com/ios/14/575656/expand-arrow--v2.png" alt="" />
                        </div>
                    </div>
                    <div className="filter1">
                        <div className="filtertype">
                            <div className="filterName1">Video</div>
                            <img src="https://img.icons8.com/ios/14/575656/expand-arrow--v2.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Calling