import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class IndexController extends Controller {

    @action
    handleScroll()
    {
        const portfolio = document.querySelector('.portfolio'),header=document.querySelector('.header');
        if (portfolio.scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}
