export const getAllCertificates= async()=>{
    // const response = await fetch('https://some_api_address/certificates');

    // if(!response.ok) throw new Error("Unable to fetch certificates");
    // return response.json();
    let  certificates = [
        {'id':1, 'status':'public', 'name':'cert_public_01_new'}, 
        {'id':2, 'status':'public', 'name':'cert_public_02_new'},
        {'id':3, 'status':'private', 'name':'cert_private_01_new'},
        {'id':4, 'status':'private', 'name':'cert_private_02_new'},
        {'id':5, 'status':'private', 'name':'cert_private_03_new'}
    ];
    return certificates
}

export const getAllCertificatesFilters= async()=>{
    let filters = [
        {'id':1, 'title': 'Public certificates', 'status':'public'}, 
        {'id':2, 'title': 'Private certificates', 'status':'private'},
        {'id':3, 'title': 'Both', 'status':'both'}
    ]
    return filters
}
export const getAllCertificatesButtons= async()=>{
    let buttons = [
        {'id':1, 'title': 'Create certificate', 'disabled':false}, 
        {'id':2, 'title': 'Import certificate', 'disabled':false},
        {'id':3, 'title': 'Export private certificate to public', 'disabled':true},
        {'id':4, 'title': 'Export  certificate to mempool', 'disabled':true},
        {'id':5, 'title': 'Delete certificate', 'disabled':true},
    ]
    return buttons
}

export const getAllTokens= async()=>{
    let  tokens = [
        {'id':1, 'status':'public', 'name':'token_public_01_new'}, 
        {'id':2, 'status':'private', 'name':'token_private_01_new'},
    ];
    return tokens
}

export const getAllTokensFilters= async()=>{
    let filters = [
        {'id':1, 'title': 'Public token', 'status':'public'}, 
        {'id':2, 'title': 'Private token', 'status':'private'},
        {'id':3, 'title': 'Both', 'status':'both'}
    ]
    return filters
}
export const getAllTokensButtons= async()=>{
    let buttons = [
        {'id':1, 'title': 'Create token', 'disabled':false}, 
        {'id':2, 'title': 'Import token', 'disabled':false},
        {'id':3, 'title': 'Export private token to public', 'disabled':true},
        {'id':4, 'title': 'Export  token to mempool', 'disabled':true},
        {'id':5, 'title': 'Delete token', 'disabled':false},
    ]
    return buttons
}