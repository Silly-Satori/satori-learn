import React from 'react';
function userPage() {
    //this is sample, we will connect to backend
    const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        image: 'https://via.placeholder.com/150',
      };
    
    return (
        // <div>
        //     <h1>User Page</h1>
        // </div>
        <div className="container mx-auto flex flex-col lg:flex-row justify-center items-start mt-8">
      
      <div className="lg:mr-8">
        <div className="flex flex-col items-center mb-4">
          <img src={userData.image} alt="User" className="w-32 h-32 rounded-full mb-4" />
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p className="text-gray-600">{userData.email}</p>
        </div>
      </div>

     {/* idhar right side ayega */}
      
    </div>
        
    )
}

export default userPage;