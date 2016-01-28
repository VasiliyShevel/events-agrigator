var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/psy', function(req, res, next) {
  res.json({
    oppa: 'gangnamJSON'
  });
});

router.get('/events-list', function(req, res, next) {
  var eventList = [
      {
          "id": "event-1", 
          "image": "http://community.stagephod.com/wp-content/uploads/2015/02/Events-stagephod.jpg",
          "name": "First Event", 
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur fuga molestias odio voluptatem vitae voluptates deleniti iure qui fugit, eveniet atque? Reprehenderit nobis ex aliquid, in nesciunt, explicabo fugiat.",
          "price": "50$"
      },
      {
          "id": "event-2", 
          "image": "http://mybanket.com/sites/default/files/event-marketing2.jpg", 
          "name": "Second Event", 
          "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur fuga molestias odio voluptatem vitae voluptates deleniti iure qui fugit, eveniet atque? Reprehenderit nobis ex aliquid, in nesciunt, explicabo fugiat.",
          "price": "10$"
      }
  ];
  res.json(eventList);
});

module.exports = router;
