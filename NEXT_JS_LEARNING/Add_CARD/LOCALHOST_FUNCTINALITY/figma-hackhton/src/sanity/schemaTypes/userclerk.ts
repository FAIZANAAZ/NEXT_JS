export const userSchema= {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'id',
        type: 'string',
        title: 'ID',
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name',
 
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
    
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
      },
    //   {
    //     name: 'role',
    //     type: 'string',
    //     title: 'Role',
    //     options: {
    //       list: [
    //         { title: 'User', value: 'user' },
    //         { title: 'Admin', value: 'admin' }
    //       ]
    //     },
    //     initialValue: 'user'
    //   },
      {
        name: 'image',
        type: 'url',
        title: 'Profile Image',
       
      }
    ]
  };
  