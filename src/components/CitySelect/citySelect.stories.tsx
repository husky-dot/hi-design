import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import CitySelect, { CitySelectProps } from './citySelect'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Example/CitySelect',
  component: CitySelect
} as Meta;

const defaultCitySelectTmp: Story<CitySelectProps> = () => {
  const cityList = ['鞍山', '安庆', '安阳', '安顺', '安康', '安丘', '阿拉善盟', '阿克苏', '安吉', '安岳', '安平', '安溪', '安宁', '安化', '阿拉尔', '安福', '阿勒泰市', '阿图什市', '安州区', '阿荣旗', '安陆市', '阿城区', '阿坝', '阿里', '阿勒泰', '澳门', '北京', '保定', '包头', '蚌埠', '亳州', '滨州', '宝鸡', '巴彦淖尔', '本溪', '白山', '白城', '北海', '百色', '巴中', '毕节', '保山', '白银', '宝应', '北流', '博爱', '宝丰', '博兴', '泌阳', '彬州市', '璧山', '博山', '宾阳', '泊头市', '博罗县', '博白县', '北镇市', '北安市', '巴彦县', '巴楚县', '拜城县', '拜泉县', '博尔塔拉', '巴州', '滨海', '北碚', '重庆', '成都', '长沙', '常州', '长春', '承德', '沧州', '长治', '赤峰', '滁州', '常德', '郴州', '常熟', '慈溪', '朝阳', '巢湖', '池州', '潮州', '从化', '长兴', '昌邑', '苍南', '长葛', '昌江黎族自治县', '崇左', '楚雄', '昌吉', '长乐', '崇州', '赤壁', '淳安', '承德县', '昌乐', '曹妃甸', '磁县', '长垣', '成安', '昌黎', '岑溪', '茌平', '曹县', '城固', '长汀', '潮安', '长寿', '常山', '赤水', '慈利', '常宁市', '茶陵', '长丰县', '苍溪县', '长清区', '崇明区', '成武县', '澄江县', '澄迈县', '昌都', '大连', '东莞', '大庆', '大同', '丹东', '东营', '德州', '德阳', '达州', '大理', '定西', '丹阳', '东阳', '大丰', '东台', '登封', '儋州', '都江堰', '大石桥', '邓州', '德清', '当阳', '东港', '大冶', '东兴', '调兵山', '灯塔', '大通', '东方', '东平', '电白', '东海', '定州', '郸城', '大荔', '达拉特旗', '大竹', '大洼', '大邑', '砀山', '敦化', '东光', '道县', '大安市', '定安县', '垫江', '东明县', '定陶区', '定边县', '大厂回族自治县', '定远县', '大悟县', '大足区', '德惠市', '东坑镇', '东阿县', '大兴安岭', '德宏', '迪庆', '敦煌', '鄂尔多斯', '鄂州', '恩施', '恩平', '峨眉山', '额敏县', '额尔古纳', '福州', '佛山', '抚顺', '阜阳', '抚州', '阜新', '富阳', '涪陵', '福清', '奉化', '肥城', '防城港', '凤凰', '阜宁', '凤城', '汾阳', '阜康', '丰城', '范县', '繁昌', '肥乡区', '封丘', '扶风', '丰县', '抚松', '富顺', '费县', '佛冈', '丰宁', '扶沟', '凤台', '奉新', '方城', '富源县', '分宜', '扶绥县', '肥西县', '繁峙县', '凤翔县', '福安', '福鼎市', '府谷县', '奉节', '丰都', '肥东县', '富民', '广州', '贵阳', '桂林', '赣州', '贵港', '广元', '广安', '高邮', '巩义', '高密', '高碑店', '高州', '固原', '广饶', '桂平', '公主岭', '广汉', '藁城', '高平', '个旧', '盖州', '古交', '格尔木', '灌云', '灌南', '赣榆', '高安', '广德', '共青城', '高阳', '高陵', '公安', '固始县', '光泽', '光山县', '固安县', '高淳区', '甘孜', '甘南', '果洛', '高雄', '鼓浪屿', '杭州', '合肥', '哈尔滨', '海口', '邯郸', '呼和浩特', '淮安', '湖州', '衡阳', '惠州', '葫芦岛', '衡水', '淮南', '菏泽', '黄石', '黄冈', '怀化', '呼伦贝尔', '鹤岗', '黑河', '淮北', '黄山', '鹤壁', '河源', '贺州', '河池', '红河', '汉中', '海宁', '惠东', '惠阳', '海城', '海门', '海阳', '霸州', '海安', '化州', '合川', '横店', '海东', '哈密', '鹤山', '桦甸', '华阴', '侯马', '河津', '霍州', '黄骅', '海林', '海盐', '淮阳', '汉阴', '含山', '和县', '户县', '辉县', '怀仁市', '滑县', '惠安', '韩城', '华亭市', '洪洞', '河口', '辉南', '洪湖', '海沧', '霍邱', '珲春', '怀宁', '怀远县', '会泽县', '河间市', '合浦县', '衡阳县', '衡山县', '衡东县', '潢川县', '贺兰县', '汉南区', '海伦市', '合江县', '环县', '黄陵县', '桦川县', '横山区', '华容', '海北', '黄南', '海南州', '海西', '和田', '花莲', '恒春', '济南', '吉林', '嘉兴', '金华', '济宁', '荆州', '江门', '江阴', '焦作', '锦州', '九江', '佳木斯', '荆门', '揭阳', '晋江市', '晋城', '晋中', '鸡西', '景德镇', '吉安', '济源', '酒泉', '靖江', '金坛', '嘉善', '句容', '胶州', '即墨', '江都', '金昌', '嘉峪关', '江山', '建湖', '晋州', '建德', '简阳', '介休', '集安', '蛟河', '建阳', '郏县', '金堂', '监利', '江津', '巨野', '嘉祥', '金乡', '缙云', '京山市', '江油', '莒南', '金湖', '集美', '金沙', '泾县', '吉安县', '吉水县', '江川县', '江华瑶族自治县', '晋宁区', '江永', '建水县', '鄄城县', '靖边', '嘉鱼县', '精河县', '靖西市', '景谷', '九台', '景东彝族自治县', '泾阳县', '九寨沟', '井冈山', '基隆', '嘉义市', '昆明', '昆山', '开封', '克拉玛依', '开平', '库尔勒', '开化', '奎屯', '开州区', '垦利', '宽城', '库车', '开阳', '康县', '开远市', '克州', '喀什地区', '凯里', '垦丁', '连云港', '临沂', '洛阳', '柳州', '兰州', '廊坊', '临汾', '辽阳', '丽水', '六安', '龙岩', '聊城', '乐山', '拉萨', '吕梁', '辽源', '莱芜', '漯河', '娄底', '来宾', '泸州', '凉山', '六盘水', '丽江', '溧阳', '临海', '兰溪', '龙口', '耒阳', '莱州', '临安', '莱阳', '陆丰', '浏阳', '廉江', '林州', '临沧', '临夏', '乐昌', '临清', '灵宝', '冷水江', '乐陵', '龙海', '醴陵', '莱西', '乐平', '阆中', '鹿泉', '利川', '老河口', '凌海', '滦南', '灵山', '连州', '陵水', '临江', '连江', '临朐', '乐亭', '滦州市', '栾城', '鲁山', '灵石', '临漳', '临潼', '蓝田', '隆昌市', '鹿邑', '柳河', '临猗', '梁山', '利津', '临邑', '龙泉', '陵川', '隆尧', '雷州', '栾川', '龙游', '兰陵', '临沭', '涟水', '澧县', '辽中', '罗平县', '涟源市', '庐江县', '临颍', '蓝山', '隆回', '芦溪', '卢氏县', '隆化县', '洛宁', '兰考县', '临澧', '利辛', '灵丘县', '禄丰县', '溧水区', '泸县', '洛川县', '罗定市', '乐东', '梁平', '临高县', '罗源县', '陆川县', '临泉县', '禄劝彝族苗族自治县', '灵武市', '林芝', '陇南', '绵阳', '牡丹江', '马鞍山', '茂名', '梅州', '眉山', '密山', '满洲里', '梅河口', '汨罗', '明光', '麻城', '孟州', '孟津', '牟平', '眉县', '民权', '渑池', '绵竹', '蒙阴', '蒙自市', '蒙城', '勐腊县', '米易县', '闽侯县', '明水县', '门头沟区', '漠河', '苗栗', '冥王星', '南京', '宁波', '南宁', '南通', '南昌', '南阳', '宁德', '南充', '南平', '内江', '宁海', '南安', '宁乡', '南沙', '讷河', '南雄', '南乐', '南陵', '宁阳', '宁国', '宁晋', '宁津', '内丘', '南宫', '内黄', '南和', '南部县', '南皮县', '宁陵', '南郑区', '宁蒗彝族自治县', '嫩江县', '宁远县', '南川', '怒江', '那曲', '南投', '莆田', '盘锦', '平顶山', '濮阳', '萍乡', '攀枝花', '普洱', '平凉', '邳州', '平湖', '普宁', '平度', '彭州', '蓬莱', '沛县', '平阳', '鄱阳', '浦江', '磐石', '平原', '平潭', '蒲城', '盘州市', '平江', '濮阳县', '平山', '平泉市', '平邑', '平舆', '平遥', '平果', '平罗县', '平阴县', '平陆县', '平昌县', '平南县', '彭水苗族土家族自治县', '普兰店', '澎湖', '青岛', '泉州', '秦皇岛', '齐齐哈尔', '衢州', '清远', '曲靖', '七台河', '钦州', '黔东南', '庆阳', '迁安', '青州', '启东', '潜江', '黔西南', '黔南', '琼海', '沁阳', '邛崃', '齐河', '清丰', '淇县', '全椒', '栖霞', '青田', '清河', '庆云', '潜山市', '青县', '祁东县', '庆安县', '杞县', '青冈县', '岐山县', '琼中', '祁县', '青阳县', '清镇', '綦江', '清徐', '迁西县', '企石镇', '青铜峡市', '黔江区', '曲阜', '日照', '瑞安', '荣成', '乳山', '如皋', '汝州', '如东', '仁怀', '瑞金', '瑞昌', '仁寿', '任丘', '汝阳', '任县', '汝城县', '容县', '荣昌区', '瑞丽', '日喀则', '上海', '深圳', '沈阳', '石家庄', '苏州', '三亚', '汕头', '绍兴', '松原', '宿迁', '宿州', '上饶', '商丘', '十堰', '邵阳', '韶关', '顺德', '朔州', '四平', '双鸭山', '绥化', '三明', '三门峡', '随州', '汕尾', '遂宁', '商洛', '石嘴山', '石河子', '石狮', '上虞', '寿光', '嵊州', '沭阳', '射阳', '三河', '舒城', '韶山', '沙河', '四会', '松滋', '舒兰', '邵东', '睢县', '泗阳', '沙湾', '涉县', '神木市', '绥中', '上高', '石泉', '泗洪', '单县', '沈丘', '三门', '睢宁', '上蔡', '遂昌', '石岛', '什邡', '上杭', '嵩县', '射洪', '商河', '泗水', '社旗', '泗县', '深州市', '上林县', '商水县', '双峰', '遂川', '上栗', '莎车县', '肃宁县', '商城县', '桑植', '石门', '鄯善县', '绥德县', '沙县', '深泽县', '石柱', '邵武', '寿县', '三台县', '山丹县', '陕州区', '绥宁县', '双城', '遂平', '沙雅', '嵩明县', '石林彝族自治县', '莘县', '三原县', '三峡', '山南', '神农架', '三清山', '天津', '太原', '唐山', '泰州', '台州', '泰安', '桐乡', '太仓', '通辽', '铁岭', '通化', '铜陵', '铜仁', '铜川', '天水', '台山', '泰兴', '滕州', '天门', '天长', '图木舒克', '桐庐', '洮南', '桐城', '台前', '太和', '天台', '太谷', '藤县', '汤阴', '土默特右旗', '郯城', '铜梁', '同安', '桃源', '泰和县', '铜鼓', '田东县', '太康县', '通许县', '通海县', '通榆县', '唐河', '同心县', '塔城市', '台湾', '通江县', '通河县', '屯昌县', '吐鲁番', '塔城', '台北', '腾冲', '台中', '台南', '台东', '桃园', '武汉', '无锡', '温州', '芜湖', '潍坊', '威海', '乌鲁木齐', '渭南', '吴江', '温岭', '乌海', '乌兰察布', '梧州', '武威', '万州', '武安', '文登', '吴川', '瓦房店', '文山', '吴忠', '武夷山', '婺源', '文昌', '武穴', '万宁', '舞钢', '温县', '武陟', '乌苏', '无为', '芜湖县', '卫辉', '乌拉特前旗', '微山', '汶上', '武城', '围场', '武义', '武鸣', '威宁', '舞阳', '无极', '万荣', '万载', '威县', '武平县', '尉氏县', '武隆县', '五常市', '旺苍县', '望奎县', '武冈市', '武定', '武当山', '乌镇', '西安', '厦门', '徐州', '襄阳', '新乡', '邢台', '宣城', '许昌', '信阳', '孝感', '湘潭', '咸阳', '西宁', '忻州', '兴安盟', '新余', '咸宁', '西双版纳', '仙桃', '兴化', '新泰', '辛集', '新沂', '新郑', '新密', '信宜', '锡林郭勒', '湘西', '湘阴', '响水', '荥阳', '兴宁', '新民', '项城', '孝义', '湘乡', '兴城', '兴平', '象山', '修武', '夏津', '新化', '仙居', '襄垣', '宣威', '霞浦', '新安', '新乡县', '盱眙', '徐闻', '夏邑', '浚县', '西乡', '西平', '新乐', '新昌', '薛城', '西华', '浠水', '香河', '信丰', '新蔡', '溆浦', '淅川', '新干', '兴国县', '新田', '寻乌县', '祥云县', '襄城县', '新宁', '献县', '新洲区', '秀山土家族苗族自治县', '新野', '仙游县', '新津县', '旬阳县', '孝昌县', '息县', '萧县', '谢岗镇', '香港', '香格里拉', '西塘', '新北', '新竹市', '烟台', '扬州', '盐城', '宜昌', '岳阳', '银川', '运城', '营口', '宜春', '益阳', '阳江', '玉林', '宜宾', '榆林', '义乌', '宜兴', '余姚', '乐清', '阳泉', '延边', '鹰潭', '永州', '云浮', '玉溪', '延安', '兖州', '永康', '英德', '仪征', '永城', '禹州', '伊宁', '永川', '雅安', '阳朔', '伊川', '偃师', '扬中', '永济', '禹城', '宜城', '原平', '宜都', '沅江', '玉环市', '永年', '阳城', '云阳', '叶县', '易县', '宜阳', '阎良', '原阳', '虞城', '玉山', '阳谷', '郓城', '伊金霍洛旗', '杨陵', '沂水', '沂南', '于都', '宜丰', '营山县', '永安', '鄢陵', '永丰', '永新', '永兴县', '攸县', '永顺县', '裕民县', '酉阳土家族苗族自治县', '应县', '阳山县', '榆树市', '沅陵县', '永登县', '鱼台县', '宜州区', '义马市', '永嘉县', '盂县', '宜良县', '玉田县', '永宁县', '伊春', '玉树', '伊犁', '宜兰', '郑州', '淄博', '珠海', '中山', '镇江', '株洲', '湛江', '张家口', '舟山', '漳州', '枣庄', '周口', '驻马店', '肇庆', '遵义', '张家港', '诸暨', '张家界', '自贡', '资阳', '昭通', '张掖', '涿州', '章丘区', '枣阳', '诸城', '庄河', '招远', '遵化', '邹城', '中卫', '邹平', '钟祥', '枝江', '漳浦', '樟树', '正定', '中牟', '赵县', '柘城', '准格尔旗', '周至', '芷江', '织金', '漳平', '资兴市', '扎兰屯市', '忠县', '柘荣', '中江县', '镇雄县', '中宁县', '周庄', '彰化'];

  return (
    <CitySelect dataSource={cityList} onChange={(cityName) => console.log(cityName)}></CitySelect>
  )
}

export const defaultCitySelect = defaultCitySelectTmp.bind({});
defaultCitySelect.storyName = 'CitySelect';
