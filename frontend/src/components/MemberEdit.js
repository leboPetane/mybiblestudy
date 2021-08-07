

const MemberEdit = ({onSubmit, member, onEditMember}) => {

    const onSave = (e) => {
        e.preventDefault()
        if (!member.name){
            alert("Please enter name")
            return
        }
        onSubmit(member)
    }

    const editCurrent = (input_name, input_email, input_mobile,input_role, input_bornAgain, input_baptized, input_foundation) => {
        const editedMember = {
            id:member.id,
            name:input_name,
            email:input_email,
            mobile:input_mobile,
            role:input_role,
            bornAgain:input_bornAgain,
            baptized:input_baptized,
            joined:member.joined,
            foundation:input_foundation
        }
        onEditMember(editedMember)
    }
    return (
        
        <form className="form-group mb-5 container flex ">
                <div className="form-group">
                    <input type="text"  placeholder="Name"   className="trend form-control ml-2" value={member.name}   onChange={(e) => editCurrent(e.target.value,member.email,member.mobile,member.role,member.bornAgain,member.baptized,member.foundation)}/>
                    <input type="email" placeholder="Email"  className="trend form-control ml-2" value={member.email}  onChange={(e) => editCurrent(member.name,e.target.value,member.mobile,member.role,member.bornAgain,member.baptized,member.foundation)}/>
                    <input type="text"  placeholder="Mobile" className="trend form-control ml-2" value={member.mobile} onChange={(e) => editCurrent(member.name,member.email,e.target.value,member.bornAgain,member.baptized,member.foundation)}/>  

                    <select className="trend form-control ml-2 p-1" value={member.role} onChange={(e) => editCurrent(member.name,member.email,member.mobile, e.target.value,member.bornAgain,member.baptized,member.foundation)}>
                        <option value="">Select Role</option>
                        <option value="member">Member</option>
                        <option value="assistant">Assistant Bible Teacher</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="buttons">
                        <div className="button">
                            <label className="title" for="development">Born Again</label>
                            <input type="checkbox" className="form-control ml-2" checked={member.bornAgain}  onChange={(e) => editCurrent(member.name,member.email,member.mobile,member.role,e.currentTarget.checked,member.baptized,member.foundation)}/>
                        </div>
                        <div className="button">
                            <label className="title" for="design">Baptised</label>
                            <input type="checkbox" className="form-control ml-2" checked={member.baptized}   onChange={(e) => editCurrent(member.name,member.email,member.mobile,member.role,member.bornAgain,e.currentTarget.checked,member.foundation)}/>
                        </div>
                        <div className="button">
                            <label className="title" for="business">Completed Foundation School</label>
                            <input type="checkbox" className="form-control ml-2" checked={member.foundation} onChange={(e) => editCurrent(member.name,member.email,member.mobile,member.role,member.bornAgain,member.baptized,e.currentTarget.checked)}/>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success btn-block" onClick={onSave}>Save Member</button>
            </form>
    )
}

export default MemberEdit
