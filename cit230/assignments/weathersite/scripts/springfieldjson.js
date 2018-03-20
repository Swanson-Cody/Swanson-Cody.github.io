            var section = document.querySelector('section');
            
            var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
                
            request.onload = function() {
                var townData = request.response;
                townInfo(townData);
            }
    
            function townInfo(jsonObj) {
                var town = jsonObj['towns'];
                for(var i = 3; i < 4; i++) {
                    var townArt = document.createElement('article');
                    var townH3 = document.createElement('h2');
                    var townP1 = document.createElement('p');
                    var townP2 = document.createElement('p');
                    var townP3 = document.createElement('p');
                    var townP4 = document.createElement('p');
                    var townP5 = document.createElement('p');
                    var myList = document.createElement('ul');
                    
                    townH3.textContent = town[i].name;
                    townP1.textContent = 'Motto: ' + town[i].motto;
                    townP2.textContent = 'Year Founded: ' + town[i].yearFounded;
                    townP3.textContent = 'Current Population: ' + town[i].currentPopulation;
                    townP4.textContent = 'Average Rainfall: ' + town[i].averageRainfall;
                    townP5.textContent = 'Events: ';
                    var event = town[i].events;
                    
                    for(var j = 0; j < town[i].events.length; j++) {
                      var listItem = document.createElement('li');
                      listItem.textContent = town[i].events[j];
                      myList.appendChild(listItem);
                    }
                    
                    townArt.appendChild(townH3);
                    townArt.appendChild(townP1);
                    townArt.appendChild(townP2);
                    townArt.appendChild(townP3);
                    townArt.appendChild(townP4);
                    townArt.appendChild(townP5);
                    townArt.appendChild(myList);
                    
                    section.appendChild(townArt);
                }
            }  
                