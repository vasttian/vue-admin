import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491219344619&di=8ac95695d0c02a5bfc394a2db7216128&imgtype=0&src=http%3A%2F%2Fdynamic-image.yesky.com%2F600x-%2FuploadImages%2Fupload%2F20140904%2Fupload%2F201409%2F0yfhrs4qyznjpg.jpg',
    name: 'vasttian',
  }
];

const Users = [];
const USERS_LENGTH = 100;
for (let i = 0; i < USERS_LENGTH; ++i) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
