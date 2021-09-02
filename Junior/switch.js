const day = 'monday';

switch(day){
    case 'monday':
        console.log('Plan course structure')
        console.log('Go to coding meetup')
        break;
    case 'tuesday':
        console.log('Prepare theory videos')
        break;
    case 'wedmesday':
        console.log('')
        break;
    case 'thursday' :
        console.log('')
        break;
    case 'friday':
        console.log('')
        break;        
    case 'saturday':
        console.log('')
        break;        
    case 'sunday':
        console.log('')
        break;
    default://para romper el ciclo, y si no hay nada util en los case manda el mensaje que no encontro ni vergas
        console.log('Not a valid day!')            
}