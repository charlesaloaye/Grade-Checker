let gradeChecker = () => {
    let thresh_hold = 100;

    let grade = document.getElementById('grade').value;
    let error = document.getElementById('error');
    let success = document.getElementById('success');
    let warning = document.getElementById('warning');

    if(grade && grade > thresh_hold){
        error.style.display ='none';
        success.style.display ='none';
        warning.style.display ='block';
        warning.innerHTML = 'Please enter score between 1-100';
    }
    else if(grade && grade <= thresh_hold){
        success.style.display = 'block';
        warning.style.display ='none';
        error.style.display ='none';

        if(grade >= 70) {
            success.innerHTML = 'A';
        }
        else if(grade >= 60){
            success.innerHTML = 'B';
        }
        else if(grade >= 50){
            success.innerHTML = 'C';
        }
        else if(grade >= 45){
            success.innerHTML = 'D';
        }
        else if(grade >= 40){
            success.innerHTML = 'E';
        } else {
            success.innerHTML = 'F';

        }

        // success.innerHTML=grade;
    } else {
        error.style.display = 'block';
        warning.style.display ='none';
        success.style.display ='none';

        error.innerHTML = 'Please Enter the field'
    }
}