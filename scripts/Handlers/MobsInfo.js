class MobsInfo{


    constructor()
    {


        this.moblist = {};
    }

    addItem(id, tier, type, loc)
    {
        if (!this.moblist[id])
        {
            this.moblist[id] = [];
        }
    
        this.moblist[id][0] = tier;
        this.moblist[id][1] = type;
        this.moblist[id][2] = loc;
    }

    initMobs()
    {

        this.addItem(111, 3, 1, 'hide');
        this.addItem(112, 4, 1, 'hide');
        this.addItem(113, 5, 1, 'hide');
        this.addItem(114, 6, 1, 'hide');
        this.addItem(115, 7, 1, 'hide');
        this.addItem(116, 8, 1, 'hide');
        this.addItem(145, 2, 1, 'hide');
        this.addItem(146, 3, 1, 'hide');
        this.addItem(147, 3, 1, 'hide');
        this.addItem(148, 4, 1, 'hide');
        this.addItem(149, 5, 1, 'hide');
        this.addItem(150, 6, 1, 'hide');
        this.addItem(151, 6, 1, 'hide');
        this.addItem(152, 7, 1, 'hide');
        this.addItem(153, 8, 1, 'hide');
        this.addItem(154, 8, 1, 'hide');
        this.addItem(162, 3, 1, 'hide');
        this.addItem(163, 3, 1, 'hide');
        this.addItem(164, 4, 1, 'hide');
        this.addItem(165, 5, 1, 'hide');
        this.addItem(166, 7, 1, 'hide');
        this.addItem(167, 8, 1, 'hide');
        this.addItem(173, 3, 1, 'hide');
        this.addItem(174, 3, 1, 'hide');
        this.addItem(175, 4, 1, 'hide');
        this.addItem(176, 5, 1, 'hide');
        this.addItem(177, 6, 1, 'hide');
        this.addItem(178, 7, 1, 'hide');
        this.addItem(180, 8, 1, 'hide');
        this.addItem(201, 4, 1, 'hide');
        this.addItem(209, 1, 1, 'hide');
        this.addItem(212, 4, 1, 'hide');
        this.addItem(213, 5, 1, 'hide');
        this.addItem(215, 7, 1, 'hide');
        this.addItem(257, 3, 0, 'fiber');
        this.addItem(258, 3, 0, 'fiber');
        this.addItem(259, 5, 0, 'fiber');
        this.addItem(260, 7, 0, 'fiber');
        this.addItem(261, 1, 1, 'hide');
        this.addItem(262, 5, 1, 'hide');
        this.addItem(263, 7, 1, 'hide');
        this.addItem(264, 4, 1, 'hide');
        this.addItem(265, 5, 1, 'hide');
        this.addItem(266, 6, 1, 'hide');
        this.addItem(267, 7, 1, 'hide');
        this.addItem(268, 8, 1, 'hide');
        this.addItem(269, 3, 0, 'wood');
        this.addItem(270, 3, 0, 'wood');
        this.addItem(271, 5, 0, 'wood');
        this.addItem(272, 5, 0, 'wood');
        this.addItem(273, 7, 0, 'wood');
        this.addItem(274, 3, 0, 'rock');
        this.addItem(275, 3, 0, 'rock');
        this.addItem(276, 5, 0, 'rock');
        this.addItem(277, 5, 0, 'rock');
        this.addItem(278, 4, 1, 'hide');
        this.addItem(279, 5, 1, 'hide');
        this.addItem(280, 5, 1, 'hide');
        this.addItem(281, 6, 1, 'hide');
        this.addItem(282, 7, 1, 'hide');
        this.addItem(283, 8, 1, 'hide');
        this.addItem(293, 3, 0, 'wood');
        this.addItem(294, 4, 0, 'wood');
        this.addItem(295, 5, 0, 'wood');
        this.addItem(296, 1, 1, 'hide');
        this.addItem(297, 2, 1, 'hide');
        this.addItem(298, 4, 0, 'wood');
        this.addItem(299, 3, 1, 'hide');
        this.addItem(300, 5, 1, 'hide');
        this.addItem(301, 5, 1, 'hide');
        this.addItem(302, 6, 1, 'hide');
        this.addItem(303, 6, 1, 'hide');
        this.addItem(304, 7, 1, 'hide');
        this.addItem(308, 3, 0, 'rock');
        this.addItem(309, 4, 0, 'rock');
        this.addItem(310, 5, 0, 'rock');
        this.addItem(311, 6, 0, 'rock');
        this.addItem(312, 8, 0, 'rock');
        this.addItem(313, 1, 1, 'hide');
        this.addItem(314, 1, 1, 'hide');
        this.addItem(315, 5, 0, 'rock');
        this.addItem(316, 6, 0, 'rock');
        this.addItem(317, 5, 1, 'hide');
        this.addItem(318, 6, 1, 'hide');
        this.addItem(323, 6, 0, 'fiber');
        this.addItem(324, 1, 1, 'hide');
        this.addItem(325, 2, 1, 'hide');
        this.addItem(326, 3, 1, 'hide');
        this.addItem(327, 4, 1, 'hide');
        this.addItem(328, 5, 1, 'hide');
        this.addItem(329, 6, 1, 'hide');
        this.addItem(330, 7, 1, 'hide');
        this.addItem(331, 7, 0, 'ore');
        this.addItem(332, 7, 0, 'ore');
        this.addItem(333, 4, 0, 'fiber');
        this.addItem(334, 5, 0, 'fiber');
        this.addItem(335, 6, 0, 'fiber');
        this.addItem(336, 7, 0, 'fiber');
        this.addItem(337, 8, 0, 'fiber');
        this.addItem(338, 3, 0, 'fiber');
        this.addItem(339, 1, 1, 'hide');
        this.addItem(340, 1, 1, 'hide');
        this.addItem(341, 6, 0, 'fiber');
        this.addItem(342, 8, 0, 'fiber');
        this.addItem(353, 3, 0, 'wood');
        this.addItem(354, 3, 0, 'wood');
        this.addItem(355, 4, 0, 'wood');
        this.addItem(356, 5, 0, 'wood');
        this.addItem(359, 3, 0, 'rock');
        this.addItem(360, 3, 0, 'rock');
        this.addItem(361, 4, 0, 'rock');
        this.addItem(362, 5, 0, 'rock');
        this.addItem(363, 6, 0, 'rock');
        this.addItem(365, 3, 0, 'ore');
        this.addItem(366, 3, 0, 'ore');
        this.addItem(367, 4, 0, 'ore');
        this.addItem(368, 5, 0, 'ore');
        this.addItem(369, 6, 0, 'ore');
        this.addItem(372, 3, 0, 'fiber');
        this.addItem(373, 4, 0, 'fiber');
        this.addItem(374, 5, 0, 'fiber');
        this.addItem(379, 5, 0, 'wood');
        this.addItem(380, 5, 0, 'wood');
        this.addItem(381, 6, 0, 'wood');
        this.addItem(382, 7, 0, 'wood');
        this.addItem(383, 8, 0, 'wood');
        this.addItem(385, 5, 0, 'rock');
        this.addItem(386, 5, 0, 'rock');
        this.addItem(387, 6, 0, 'rock');
        this.addItem(388, 7, 0, 'rock');
        this.addItem(389, 8, 0, 'rock');
        this.addItem(391, 4, 0, 'ore');
        this.addItem(392, 5, 0, 'ore');
        this.addItem(393, 6, 0, 'ore');
        this.addItem(394, 7, 0, 'ore');
        this.addItem(395, 8, 0, 'ore');
        this.addItem(397, 5, 0, 'fiber');
        this.addItem(398, 5, 0, 'fiber');
        this.addItem(399, 6, 0, 'fiber');
        this.addItem(400, 7, 0, 'fiber');
        this.addItem(401, 3, 0, 'rock');
        this.addItem(402, 5, 0, 'rock');
        this.addItem(403, 4, 0, 'wood');
        this.addItem(404, 5, 0, 'wood');
        this.addItem(405, 6, 0, 'wood');
        this.addItem(406, 7, 0, 'wood');
        this.addItem(407, 8, 0, 'wood');
        this.addItem(408, 3, 0, 'rock');
        this.addItem(409, 4, 0, 'rock');
        this.addItem(410, 5, 0, 'rock');
        this.addItem(411, 5, 0, 'fiber');
        this.addItem(412, 7, 0, 'fiber');
        this.addItem(413, 3, 1, 'hide');
        this.addItem(414, 5, 1, 'hide');
        this.addItem(415, 4, 0, 'ore');
        this.addItem(416, 5, 0, 'ore');
        this.addItem(417, 3, 0, 'ore');
        this.addItem(418, 5, 0, 'ore');
        this.addItem(419, 8, 0, 'ore');
        this.addItem(421, 6, 1, 'hide');
        this.addItem(422, 3, 0, 'wood');
        this.addItem(423, 5, 0, 'wood');
        this.addItem(424, 5, 0, 'wood');
        this.addItem(425, 7, 0, 'wood');
        this.addItem(427, 3, 0, 'rock');
        this.addItem(428, 4, 0, 'rock');
        this.addItem(429, 5, 0, 'rock');
        this.addItem(430, 7, 0, 'rock');
        this.addItem(432, 5, 1, 'hide');
        this.addItem(433, 6, 1, 'hide');
        this.addItem(434, 7, 1, 'hide');
        this.addItem(435, 8, 1, 'hide');
        this.addItem(437, 5, 1, 'hide');
        this.addItem(447, 5, 0, 'wood');
        this.addItem(448, 6, 0, 'wood');
        this.addItem(452, 5, 0, 'wood');
        this.addItem(453, 6, 0, 'wood');
        this.addItem(454, 7, 0, 'wood');
        this.addItem(462, 5, 0, 'rock');
        this.addItem(463, 6, 0, 'rock');
        this.addItem(467, 5, 0, 'rock');
        this.addItem(468, 6, 0, 'rock');
        this.addItem(469, 7, 0, 'rock');
        this.addItem(470, 8, 0, 'rock');
        this.addItem(477, 5, 0, 'ore');
        this.addItem(478, 6, 0, 'ore');
        this.addItem(483, 6, 0, 'ore');
        this.addItem(484, 7, 0, 'ore');
        this.addItem(492, 5, 0, 'fiber');
        this.addItem(493, 6, 0, 'fiber');
        this.addItem(497, 5, 0, 'fiber');
        this.addItem(498, 6, 0, 'fiber');
        this.addItem(499, 7, 0, 'fiber');
        this.addItem(500, 5, 0, 'fiber');
        this.addItem(508, 5, 0, 'wood');
        this.addItem(509, 6, 0, 'wood');
        this.addItem(514, 5, 0, 'rock');
        this.addItem(515, 6, 0, 'rock');
        this.addItem(519, 4, 0, 'ore');
        this.addItem(520, 5, 0, 'ore');
        this.addItem(521, 6, 0, 'ore');
        this.addItem(526, 5, 0, 'fiber');
        this.addItem(527, 6, 0, 'fiber');
        this.addItem(532, 5, 0, 'wood');
        this.addItem(533, 6, 0, 'wood');
        this.addItem(534, 7, 0, 'wood');
        this.addItem(538, 5, 0, 'rock');
        this.addItem(540, 7, 0, 'rock');
        this.addItem(544, 5, 0, 'ore');
        this.addItem(545, 6, 0, 'ore');
        this.addItem(546, 7, 0, 'ore');
        this.addItem(550, 5, 0, 'fiber');
        this.addItem(551, 6, 0, 'fiber');
        this.addItem(552, 7, 0, 'fiber');
        this.addItem(557, 6, 0, 'wood');
        this.addItem(558, 7, 0, 'wood');
        this.addItem(559, 8, 0, 'wood');
        this.addItem(563, 6, 0, 'rock');
        this.addItem(564, 7, 0, 'rock');
        this.addItem(565, 8, 0, 'rock');
        this.addItem(569, 6, 0, 'ore');
        this.addItem(570, 7, 0, 'ore');
        this.addItem(571, 8, 0, 'ore');
        this.addItem(575, 6, 0, 'fiber');
        this.addItem(576, 7, 0, 'fiber');
        this.addItem(577, 8, 0, 'fiber');
        this.addItem(616, 5, 4, 'droneicon');
        this.addItem(617, 6, 4, 'droneicon');
        this.addItem(618, 7, 4, 'droneicon');
        this.addItem(619, 3, 4, 'droneicon');
        this.addItem(654, 1, 0, 'fiber');
        this.addItem(655, 1, 0, 'fiber');
        this.addItem(656, 1, 0, 'fiber');
        this.addItem(657, 1, 0, 'fiber');
        this.addItem(738, 3, 3, 'rabble');
        this.addItem(740, 6, 3, 'rabble');
        this.addItem(765, 3, 3, 'keen');
        this.addItem(767, 6, 3, 'keen');
        this.addItem(792, 3, 3, 'pyromaniac');
        this.addItem(794, 6, 3, 'pyromaniac');
        this.addItem(806, 1, 1, 'hide');
        this.addItem(807, 1, 1, 'hide');
        this.addItem(808, 1, 1, 'hide');
        this.addItem(810, 1, 1, 'hide');
        this.addItem(811, 1, 1, 'hide');
        this.addItem(812, 1, 1, 'hide');
        this.addItem(813, 1, 1, 'hide');
        this.addItem(814, 1, 1, 'hide');
        this.addItem(817, 1, 1, 'hide');
        this.addItem(819, 1, 1, 'hide');
        this.addItem(820, 3, 3, 'enforcer');
        this.addItem(822, 6, 3, 'enforcer');
        this.addItem(824, 1, 1, 'hide');
        this.addItem(825, 1, 1, 'hide');
        this.addItem(826, 1, 1, 'hide');
        this.addItem(828, 1, 1, 'hide');
        this.addItem(829, 1, 1, 'hide');
        this.addItem(836, 1, 1, 'hide');
        this.addItem(837, 1, 1, 'hide');
        this.addItem(838, 1, 1, 'hide');
        this.addItem(839, 1, 1, 'hide');
        this.addItem(840, 1, 1, 'hide');
        this.addItem(843, 1, 1, 'hide');
        this.addItem(844, 1, 1, 'hide');
        this.addItem(847, 1, 1, 'hide');
        this.addItem(969, 3, 3, 'lieutenant');
        this.addItem(970, 3, 3, 'lieutenant');
        this.addItem(971, 3, 3, 'lieutenant');
        this.addItem(974, 3, 3, 'lieutenant');
        this.addItem(975, 3, 3, 'lieutenant');
        this.addItem(977, 6, 3, 'commander');
        this.addItem(979, 3, 3, 'commander');
        this.addItem(1009, 3, 3, 'suppression');
        this.addItem(1010, 3, 3, 'suppression');
        this.addItem(1011, 3, 3, 'suppression');
        this.addItem(1017, 3, 3, 'masterof');
        this.addItem(1018, 3, 3, 'masterof');
        this.addItem(1019, 3, 3, 'masterof');
        this.addItem(1049, 3, 3, 'ritual');
        this.addItem(1050, 3, 3, 'ritual');
        this.addItem(1051, 3, 3, 'ritual');
        this.addItem(1057, 3, 3, 'mistress');
        this.addItem(1058, 3, 3, 'mistress');
        this.addItem(1059, 3, 3, 'mistress');
        this.addItem(1073, 3, 3, 'chosenofmorgana');
        this.addItem(1074, 3, 3, 'chosenofmorgana');
        this.addItem(1075, 3, 3, 'chosenofmorgana');
        this.addItem(1308, 7, 3, 'swordmaster');
        this.addItem(1335, 7, 3, 'marksman ');
        this.addItem(1336, 7, 3, 'nameless');
        this.addItem(1337, 8, 3, 'nameless');
        this.addItem(1371, 7, 3, 'cryomancer');
        this.addItem(1372, 8, 3, 'cryomancer');
        this.addItem(1389, 7, 3, 'lord');
        this.addItem(1390, 8, 3, 'lord');
        this.addItem(1406, 6, 0, 'ore');
        this.addItem(1407, 7, 3, 'mastercryomancer');
        this.addItem(1408, 8, 3, 'mastercryomancer');
        this.addItem(1414, 1, 1, 'hide');
        this.addItem(1708, 5, 3, 'warrior');
        this.addItem(1709, 5, 3, 'chief');
        this.addItem(1713, 5, 3, 'leader');
        this.addItem(1714, 5, 3, 'maiden');
        this.addItem(1716, 5, 3, 'graybeard');
        this.addItem(1717, 5, 3, 'grandfather');
        this.addItem(1720, 5, 3, 'elder');
        this.addItem(1721, 5, 3, 'druid');



    }




}