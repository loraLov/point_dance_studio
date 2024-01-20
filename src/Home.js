import image from './main_new.jpg';
function Home (){
    return(
        
         <div>
             
             <img className='homePic'  src= {image} width = "100%" alt = "dance"/>
    
            <div className='homeQuote'>
            <h2 className='homeText'>“Dance first. Think later. It is the natural order.” </h2>
            <p className='homeAuthor'>Samuel Beckett</p>
            </div>
             
        </div>
        
    )
}
export default Home;