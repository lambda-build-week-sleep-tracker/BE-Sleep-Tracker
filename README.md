# Sleep Tracker Backend

# Endpoints

## POST /auth/login

#### Expected Payload:

```
{
  "email": "amanda@gmail.com",
  "password": "password123"
}
```

#### Returns:

```
{
  "id": 1,
  "email": "amanda@aol.com",
  "parent_name": "Amanda Lane",
  "child_name": "Brannon",
  "age": "1 week",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6ImFtYW5kYUBhb2wuY29tIiwiaWF0IjoxNTY3MDM4MDg3LCJleHAiOjE1Njc2NDI4ODd9.vNfxryaHCkhsZ1I1jJHmH4iscWxV38FGvEyJEtKPBHI"
}
```

## POST /auth/register

#### Expected Payload:

```
{
	"email": "amanda@gmail.com",
	"parent_name": "Amanda Lane",
	"child_name": "Brannon",
	"birthday": 1565413200000,
	"password": "password123"
}
```

#### Returns:

```
{
  "id": 1,
  "parent_name": "Amanda Lane",
  "email": "amanda@aol.com",
  "child_name": "Brannon",
  "age": "1 week",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJlbWFpbCI6ImFtYW5kYUBhb2wuY29tIiwiaWF0IjoxNTY3MDQ1NDk1LCJleHAiOjE1Njc2NTAyOTV9.dS6X1D3MAK-YD7Qn2kxVPvvzxKQV-ya7LKznrpchNzY"
}
```

## POST /api/sleep

#### Expected Payload:

```
{
  "user_id": 1, // from local storage
  "sleep_start": 1567041409223,
  "sleep_end": 1567073809223
}
```

## GET /api/sleep/:userid

**Expected Parameter:** The user_id from local storage

**Returns:**

```
{
  "id": 1,
  "email": "amanda@aol.com",
  "parent_name": "Amanda Lane",
  "child_name": "Brannon",
  "birthday": "2019-08-21T05:00:00.000Z",
  "password": "$2a$10$e73godn0jIRzGPj.kWYwAueL5jMxOoXRG2vb.cPjl0AYdRcO.Zc0.",
  "data": [
    {
      "id": 1,
      "sleep_start": 1567041409223,
      "sleep_end": 1567073809223,
      "user_id": 1
    },
    {
      "id": 2,
      "sleep_start": 1566951009244,
      "sleep_end": 1566992209228,
      "user_id": 1
    },
        {
      "id": 2,
      "sleep_start": 1566951009244,
      "sleep_end": 1566992209228,
      "user_id": 1
    }
  ]
}
```
