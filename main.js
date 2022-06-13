
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ewRMrYC8e/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}


function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
        (results[0].confidence*100).toFixed(2)+"%";

        img = document.getElementById('cat1');
        img1 = document.getElementById('dog1');
        img2 = document.getElementById('husky1');
        img3 = document.getElementById('lion');

        if (results[0].label == "Meowing") {
            img.src = 'demon.mp4';
            img1.src = 'husky.jpg';
            img2.src = 'lion.jpg';
            img3.src = 'cow.jpg';

        } else if (results[0].label == "Barking"){
            img.src = 'puss.webp';
            img1.src = 'husky gif.gif';
            img2.src = 'lion.jpg';
            img3.src = 'cow.jpg';
        } else if (results[0].label == "Roaring"){
            img.src = 'puss.webp';
            img1.src = 'husky.jpg';
            img2.src = 'lion gif.gif';
            img3.src = 'cow.jpg';
        }else{
            img.src = 'puss.webp';
            img1.src = 'husky.jpg';
            img2.src = 'lion.jpg';
            img3.src = 'nice.gif';
        }
    }

}