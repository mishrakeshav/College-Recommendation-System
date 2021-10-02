const addCollegeToMyList = (value)=>{
    var existingCollege = JSON.parse(localStorage.getItem('MyColleges'));
    if(existingCollege){
        existingCollege.push(value);
    }else{
        existingCollege = [];
        existingCollege.push(value);
    }
    localStorage.setItem('MyColleges', JSON.stringify(existingCollege));
}

export default addCollegeToMyList;

