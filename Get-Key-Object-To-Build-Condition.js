const buildCondtionsV2 = (query) => {
    //query là các tên fields mà bạn truyền vào để tìm kiếm.
    //queryOnFields là nơi định nghĩa các tên fields mà muốn tìm kiếm ở dưới db.
    const queryOnFields = [
      'branch_id', 'plo_id', 'created_by',
      'sub_status', 'sub_vendor_id', 'request_type',
      'request_by_department', 'search_text', 'pickupcontrol_status',
      'created_at_from', 'created_at_to'
    ]
    const conditions = {
      $and: []
    }
    Object.keys(query).forEach(key => {
      if(queryOnFields.includes(key)){
        switch (key) {
            case 'search_text':
                conditions.$and.push({
                    $or: [
                        {
                        'barcode': {
                            $regex: query.search_text,
                            $options: "i"
                        }
                        },
                        {
                        'reference_codes': {
                            $regex: query.search_text,
                            $options: "i"
                        }
                        }
                    ]
                    });
                break;
            case 'created_at_from':
                conditions.$and.push({
                    'created_at': {
                        $gte: moment(query.created_at_from).startOf('day')
                    }
                });
                break;
            case 'created_at_to': 
                conditions.$and.push({
                    'created_at': {
                        $lte: moment(query.created_at_to).endOf('day')
                    }
                });
                break;
            default:
                let _obj = {}
                _obj[key] = query[key];
                conditions.$and.push(_obj)
                break;
        }
        // if(key === 'search_text'){
        //     conditions.$and.push({
        //     $or: [
        //         {
        //         'barcode': {
        //             $regex: query.search_text,
        //             $options: "i"
        //         }
        //         },
        //         {
        //         'reference_codes': {
        //             $regex: query.search_text,
        //             $options: "i"
        //         }
        //         }
        //     ]
        //     });
        // }else if(key === 'created_at_from'){
        //     if(query.created_at_from !== undefined){
        //     conditions.$and.push({
        //         'created_at': {
        //         $gte: moment(query.created_at_from).startOf('day')
        //         }
        //     });
        //     }
        // }else if(key === 'created_at_to'){
        //     if(query.created_at_to !== undefined){
        //     conditions.$and.push({
        //         'created_at': {
        //         $lte: moment(query.created_at_to).endOf('day')
        //         }
        //     });
        //     }
        // }else {
        //     let _obj = {}
        //     _obj[key] = query[key];
        //     conditions.$and.push(_obj)
        // }
      }
    });
    return conditions.$and.length <= 0 ? {} : conditions;
}