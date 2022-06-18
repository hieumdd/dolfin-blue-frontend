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

    async create(user: Partial<User>) {
        return this.userRepository.create(user);
    }

    async update(user: User) {
        return this.userRepository.update(user.id, user);
    }
}
