import { Repository } from '../../providers/firestore';
import { User } from './user.entity';

export default class UserService {
    protected userRepository: Repository<User>;

    constructor() {
        this.userRepository = new Repository<User>('xero-dev/auth/users');
    }

    async get() {
        return this.userRepository.find();
    }

    async set(user: Partial<User>) {
        return this.userRepository.create(user);
    }
}
