import React, { useEffect } from 'react';
import Scroll from '../../components/Scroll';
import Slider from '../../components/Slider';
import RecommendList from '../../components/RecommendList'
import { Content } from './style';
import * as actionTypes from './store/action';
import { connect } from "react-redux";

const Recommend = props => {
  const { bannerList, recommendList } = props
  const { getBannerDataDispatch, getRecommendListDataDispatch } = props

  useEffect(() => {
    getRecommendListDataDispatch()
    getBannerDataDispatch()
  }, [])

  const bannerListJS = bannerList ? bannerList.toJS() : []
  const recommendListJS = recommendList ? recommendList.toJS() : []

  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerListJS} />
          <RecommendList recommendList={recommendListJS} />
        </div>
      </Scroll>
    </Content>
  )
}

const mapStateToProps = state => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList'])
})

const mapDispatchToProps = dispatch => ({
  getBannerDataDispatch() {
    dispatch(actionTypes.getBannerList())
  },
  getRecommendListDataDispatch() {
    dispatch(actionTypes.getRecommendList())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))