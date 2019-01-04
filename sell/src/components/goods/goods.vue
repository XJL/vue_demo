<template>
  <div class="goods">
    <div class="menu-wrapper" v-el:menu-wrapper>
      <ul>
        <li class="menu-item menu-item-hook" :class="{active: currentIndex === $index}" v-for="item in goods"
            @click="selectMenu($index, $event)">
          <span class="text" :class="{['border-1px']: ($index !== currentIndex) && ($index !== currentIndex - 1)}">
            <i v-show="item.type>0" class="icon" :class="classMap[item.type]"></i>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" v-el:foods-wrapper>
      <ul>
        <li class="food-list food-list-hook" v-for="item in goods">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li class="food-item" v-for="food in item.foods" @click="_showFood(food, $event)">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <div class="desc" v-if="food.description">{{food.description}}</div>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="newPrice"><span class="currency">&#165;</span>{{food.price}}</span>
                  <span class="oldPrice" v-show="food.oldPrice" style="text-decoration:line-through;">&#165;{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food" :inBScroll="true"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <food :food="selectedFood" v-ref:food></food>
    <shopcart v-ref:shopcart :selected-foods="selectedFoods" :delivery-price="seller.deliveryPrice"
              :min-price="seller.minPrice"></shopcart>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import shopcart from 'components/shopcart/shopcart';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import food from 'components/food/food';

  const HTTP_OK = 0;

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      shopcart,
      cartcontrol,
      food
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        menuHeight: [],
        menuListHeight: 0,
        scrollY: 0,
        menuScrollY: 0,
        selectedFood: {}
      };
    },
    computed: {
      currentIndex: {
        get() {
          for (let i = 0; i < this.listHeight.length; i++) {
            let height1 = this.listHeight[i];
            let height2 = this.listHeight[i + 1];
            if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
              return i;
            }
          }
          return 0;
        },
        set($index) {
          this.scrollY = this.listHeight[$index];
          this.foodsScroll.scrollTo(0, -this.listHeight[$index], 0);
          if (this.menuHeight[$index] + 54 > this.menuScrollY + this.menuListHeight) {
            this.menuScroll.scrollTo(0, -(this.menuHeight[$index] + 54 - this.menuListHeight), 0);
          } else if (this.menuHeight[$index] < this.menuScrollY) {
            this.menuScroll.scrollTo(0, -this.menuHeight[$index], 0);
          }
        }
      },
      selectedFoods() {
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    created() {
      this.classMap = [
        'decrease', 'discount', 'special', 'invoice', 'guarantee'
      ];
      this.$http.get('/api/goods').then((rsp) => {
        if (rsp.ok && (rsp.body.errno === HTTP_OK)) {
          this.goods = rsp.body.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
    },
    methods: {
      _initScroll() {
        this.menuScroll = new BScroll(this.$els.menuWrapper, {
          click: true,
          probeType: 3
        });
        this.foodsScroll = new BScroll(this.$els.foodsWrapper, {
          click: true,
          probeType: 3
        });

        this.menuScroll.on('scroll', (pos) => {
          this.menuScrollY = Math.abs(Math.round(pos.y));
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {
        let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }

        let menuHeight = 0;
        this.menuListHeight = this.$els.menuWrapper.clientHeight;
        let menus = this.$els.menuWrapper.getElementsByClassName('menu-item-hook');
        this.menuHeight.push(menuHeight);
        for (let i = 0; i < menus.length; i++) {
          let item = menus[i];
          menuHeight += item.clientHeight;
          this.menuHeight.push(menuHeight);
        }
      },
      selectMenu(index, event) {
        if (!event._constructed) { // 当我们自己去指定派发事件的时候这个值为true  浏览器原生点击事件没有这个属性
          return;
        }

        // 方法1： 使用scrollTo方法
        // this.currentIndex = index;

        // 方法2： 使用scrollToElement方法
        let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let item = foodList[index];
        // todo: 这里的300会导致左边菜单滚动
        this.foodsScroll.scrollToElement(item, 300);
      },
      _drop(target) {
        // 异步调用 优化体验
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target);
        });
      },
      _showFood(food, event) {
        if (!event._constructed) { // 当我们自己去指定派发事件的时候这个值为true  浏览器原生点击事件没有这个属性
          return;
        }
        this.selectedFood = food;
        this.$refs.food.show();
      }
    },
    events: {
      'cart.add'(target) {
        this._drop(target);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";

  .goods
    display flex
    position: absolute
    width: 100%
    top: 174px
    bottom: 48px
    overflow hidden

    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      overflow-x: hidden;
      overflow-y: scroll;

      &::-webkit-scrollbar
        display: none

      .menu-item
        display: table
        width: 56px
        height: 54px
        line-height: 14px
        padding: 0 12px

        &.active
          background: white

        .icon
          display: inline-block
          vertical-align: top
          margin-top 1px
          width 12px
          height 12px
          background-size 12px 12px

          &.decrease
            bg-img('decrease_3')

          &.discount
            bg-img('discount_3')

          &.guarantee
            bg-img('guarantee_3')

          &.invoice
            bg-img('invoice_3')

          &.special
            bg-img('special_3')

        .text
          display: table-cell
          vertical-align: middle
          color: rgb(77, 85, 93)
          font-size: 12px

          &.border-1px
            border-bottom-1px(rgba(7, 17, 27, 0.1))

    .foods-wrapper
      flex: 1
      overflow-x: hidden;
      overflow-y: scroll;

      &::-webkit-scrollbar
        display: none

      .food-list
        .title
          padding: 0 14px
          line-height: 26px
          height: 26px
          font-size: 12px
          color: rgb(147 153, 159)
          border-left: 4px solid #d9dde1
          background: #f3f5f7

        .food-item
          display: flex
          margin: 18px
          padding-bottom: 18px
          font-size: 0
          border-bottom-1px(rgba(7, 17, 27, 0.1))

          &:last-child
            border-none()
            margin-bottom: 0

          .icon
            flex: 0 0 57px
            margin-right: 10px

          .content
            flex: 1
            overflow: hidden

            .name
              margin: 2px 0 8px 0
              font-size: 14px
              line-height: 14px
              color: rgb(7, 17, 27)

            .desc
              width: 100%
              margin-top: 8px
              font-size: 10px
              color: rgb(147, 153, 159)
              line-height: 12px
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis

            .extra
              margin-top: 8px
              font-size: 0

              span
                font-size: 10px
                color: rgb(147, 153, 159)
                line-height: 10px

                & + span
                  margin-left: 6px

            .price
              margin-top: 8px

              .newPrice
                color: rgb(240, 20, 20)
                font-size: 14px
                font-weight: 700

                .currency
                  font-size: 10px
                  font-weight: normal

              .oldPrice
                margin-left: 8px
                color: rgb(147, 153, 159)
                font-size: 10px
                font-weight: 700

                .currency
                  font-weight: normal

            .cartcontrol-wrapper
              position: absolute
              right: 0
              bottom: 12px
    .detail-wrapper
      position: fixed
      top: 0
      left: 0
      bottom: 48px
      background: #fff
</style>
