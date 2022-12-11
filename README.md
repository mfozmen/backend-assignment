# backend-assignment

## Endpoint

<https://hidden-lake-26565.herokuapp.com/>

## Routes

### [POST /records/search](https://hidden-lake-26565.herokuapp.com/records/search)

A route to search for records to find their total counts.

#### Sample Request

```json
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```

#### Sample Response

```json
{
  "code": 0,
  "msg": "Success",
  "records": [
    {
      "key": "TAKwGc6Jr4i8Z487",
      "createdAt": "2017-01-28T01:22:14.398Z",
      "totalCount": 2800
    },
    {
      "key": "NAeQ8eX7e5TEg7oH",
      "createdAt": "2017-01-27T08:19:14.135Z",
      "totalCount": 2900
    }
  ]
}
```
