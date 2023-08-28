const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;

    displayPhone(phones);

}
const displayPhone = (phones) => {
    const showAllContainer = document.getElementById('show-all-container');

    if( phones.length > 12){
        showAllContainer.classList.remove('hidden');


    }
    else{
        showAllContainer.classList.add('hidden');
    }
    
    phones = phones.slice(0,12);
    const phoneContainer = document.getElementById('phone-container');
     phoneContainer.textContent ='';
    phones.forEach(phone => {
        const phoneCart = document.createElement('div');
        phoneCart.classList = `card  bg-gray-100 shadow-xl`;
        phoneCart.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-center">
                            <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                        </div>
                    </div>
        `;
        phoneContainer.appendChild(phoneCart);

    });
    // hide loading sipnner 
    toggleLoadingSpinner(false);


}
// handle search button 
const handleSearch = () =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    loadPhone(searchText);
}
// 
// const handleSearch2 = () =>{
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field-2');
//     const searchText = searchField.value;
//     loadPhone(searchText);

// }
// loading-spinner
const toggleLoadingSpinner =(isLoading)=>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');

    }

}
const handleShowDetails = async (id)=>{
    console.log(id);
    const res =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    
    
    
    showPhoneDetails(phone);

}
const showPhoneDetails =(phone)=>{
    
    
    
    const showDeatilsConstainer = document.getElementById('show-deatils-container');
    showDeatilsConstainer.innerHTML=`
    <img src ="${phone.image}" alt=""/>
    <h1>${phone.name}</h1>
    <p>${phone.releaseDate}</p>
    
    `

    
    show_details_modal.showModal();

}
