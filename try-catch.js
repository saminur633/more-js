function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.Value;
    const errorTag = document.getElementById('error');

    try{
        console.log(bBaria)
    }catch{
        console.log('ERROR:' , err)
        errorTag.innerHTML = 'something wrong';
    }finally{
        console.log('All done inside try catch');
    }
    console.log(111111);
}