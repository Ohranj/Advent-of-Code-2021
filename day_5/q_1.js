const array = [];

for (let i = 0; i < 1000; i++) {
	let mapRow = [];
	for (let k = 0; k < 1000; k++) {
		mapRow.push(0);
	}
	array.push(mapRow);
}

const inputs =
	"657,934 -> 657,926\n130,34 -> 570,474\n478,716 -> 226,464\n861,110 -> 861,167\n448,831 -> 370,831\n75,738 -> 390,738\n26,880 -> 864,42\n965,658 -> 527,220\n208,381 -> 80,381\n523,475 -> 807,475\n219,69 -> 219,434\n793,538 -> 534,797\n754,602 -> 754,148\n443,327 -> 443,611\n606,395 -> 546,395\n980,56 -> 51,985\n619,325 -> 354,325\n342,123 -> 819,600\n290,533 -> 374,533\n598,77 -> 598,75\n605,302 -> 605,636\n97,981 -> 692,386\n278,779 -> 278,800\n661,377 -> 661,10\n726,108 -> 518,316\n271,883 -> 271,50\n382,271 -> 606,271\n963,358 -> 891,286\n496,880 -> 496,855\n211,142 -> 211,49\n841,866 -> 260,285\n841,849 -> 173,181\n927,326 -> 391,862\n396,558 -> 459,558\n753,183 -> 953,183\n941,698 -> 941,407\n347,612 -> 347,476\n18,340 -> 18,612\n140,299 -> 797,956\n714,907 -> 714,228\n966,155 -> 194,927\n769,674 -> 712,674\n644,675 -> 948,979\n703,872 -> 812,763\n26,629 -> 120,535\n844,738 -> 844,253\n798,133 -> 798,795\n27,318 -> 288,57\n38,545 -> 872,545\n827,351 -> 195,983\n818,45 -> 21,842\n257,559 -> 626,928\n145,925 -> 886,184\n83,618 -> 590,111\n326,243 -> 53,243\n489,278 -> 526,278\n783,693 -> 783,525\n495,636 -> 495,585\n374,716 -> 215,557\n839,536 -> 839,966\n850,468 -> 955,468\n55,799 -> 55,447\n472,722 -> 296,898\n390,731 -> 120,461\n405,493 -> 208,296\n807,42 -> 56,793\n476,327 -> 655,327\n24,965 -> 967,22\n776,211 -> 776,850\n489,20 -> 822,20\n630,740 -> 871,499\n743,493 -> 283,953\n62,429 -> 62,720\n806,270 -> 806,332\n550,154 -> 107,597\n71,713 -> 533,251\n620,575 -> 620,156\n726,829 -> 143,246\n944,553 -> 468,553\n185,582 -> 185,468\n845,266 -> 212,899\n654,97 -> 265,486\n726,609 -> 726,147\n631,76 -> 860,76\n835,24 -> 928,24\n712,719 -> 74,81\n616,478 -> 616,117\n903,226 -> 903,577\n440,699 -> 136,395\n215,705 -> 890,30\n20,24 -> 981,985\n102,144 -> 850,892\n695,967 -> 582,967\n219,284 -> 219,388\n359,833 -> 665,833\n389,55 -> 305,55\n59,32 -> 957,930\n815,198 -> 64,949\n699,540 -> 717,558\n215,682 -> 182,682\n805,489 -> 328,489\n43,546 -> 578,546\n489,181 -> 489,363\n266,391 -> 266,582\n863,368 -> 448,368\n83,236 -> 83,487\n874,875 -> 874,413\n799,90 -> 799,802\n253,29 -> 253,905\n136,446 -> 435,745\n830,534 -> 550,534\n183,785 -> 107,785\n81,517 -> 159,517\n359,941 -> 359,560\n71,546 -> 948,546\n596,811 -> 596,791\n255,960 -> 255,159\n788,15 -> 788,682\n240,55 -> 240,244\n51,423 -> 137,423\n504,418 -> 809,723\n131,842 -> 914,59\n727,790 -> 82,145\n281,509 -> 841,509\n797,807 -> 834,807\n333,499 -> 790,499\n215,328 -> 215,139\n500,898 -> 500,862\n75,217 -> 777,919\n17,264 -> 17,446\n852,755 -> 150,755\n865,186 -> 385,186\n158,192 -> 158,733\n196,261 -> 196,128\n989,960 -> 131,102\n807,393 -> 807,153\n507,579 -> 507,764\n468,76 -> 535,76\n381,357 -> 659,357\n794,277 -> 749,277\n51,152 -> 546,647\n797,959 -> 458,959\n82,156 -> 967,156\n261,624 -> 460,624\n597,53 -> 197,53\n153,507 -> 411,765\n305,717 -> 768,717\n344,954 -> 344,217\n194,432 -> 545,432\n346,46 -> 557,46\n685,599 -> 685,312\n49,719 -> 49,631\n499,668 -> 304,863\n262,405 -> 554,405\n87,64 -> 295,64\n859,675 -> 74,675\n663,776 -> 99,212\n232,189 -> 232,904\n777,276 -> 703,276\n704,492 -> 86,492\n142,736 -> 514,364\n418,611 -> 224,417\n602,571 -> 602,424\n152,603 -> 248,603\n915,673 -> 143,673\n538,32 -> 128,32\n975,885 -> 975,344\n870,511 -> 870,756\n330,798 -> 46,798\n440,195 -> 587,195\n739,237 -> 568,66\n54,838 -> 196,980\n370,556 -> 47,556\n124,575 -> 748,575\n261,283 -> 880,902\n784,91 -> 426,449\n764,670 -> 148,670\n32,51 -> 967,986\n807,906 -> 10,906\n470,488 -> 579,597\n274,649 -> 285,649\n221,540 -> 221,94\n914,957 -> 914,510\n879,825 -> 145,91\n438,833 -> 438,775\n191,844 -> 911,124\n145,763 -> 595,763\n504,81 -> 622,199\n834,206 -> 834,704\n908,308 -> 815,308\n929,567 -> 929,322\n805,50 -> 620,235\n36,409 -> 133,312\n345,375 -> 19,701\n468,948 -> 468,108\n109,547 -> 446,547\n929,916 -> 69,56\n927,857 -> 318,248\n833,948 -> 833,61\n559,787 -> 559,982\n293,825 -> 293,775\n508,744 -> 545,744\n827,713 -> 753,639\n88,775 -> 555,775\n523,812 -> 684,812\n307,142 -> 307,265\n636,40 -> 355,321\n891,875 -> 891,25\n301,423 -> 712,12\n922,187 -> 219,890\n45,447 -> 230,262\n114,568 -> 233,687\n573,398 -> 677,398\n334,101 -> 324,101\n957,277 -> 957,652\n943,834 -> 610,834\n523,632 -> 523,379\n958,361 -> 90,361\n408,824 -> 380,824\n647,314 -> 647,449\n747,83 -> 59,83\n776,104 -> 937,104\n16,984 -> 989,11\n362,581 -> 362,226\n72,962 -> 940,94\n319,877 -> 319,122\n310,206 -> 986,882\n794,877 -> 267,877\n855,58 -> 976,58\n699,971 -> 598,971\n162,556 -> 162,440\n494,859 -> 494,255\n794,210 -> 142,862\n275,510 -> 548,510\n739,592 -> 739,793\n376,985 -> 376,990\n755,264 -> 280,739\n187,34 -> 187,688\n770,827 -> 770,548\n10,68 -> 913,971\n571,427 -> 571,944\n153,211 -> 153,560\n976,972 -> 55,51\n103,611 -> 674,40\n95,972 -> 924,143\n929,94 -> 38,985\n777,330 -> 60,330\n312,430 -> 312,326\n549,433 -> 269,433\n477,267 -> 477,403\n598,375 -> 19,375\n512,799 -> 512,831\n348,700 -> 348,43\n165,97 -> 63,199\n38,835 -> 38,828\n282,334 -> 282,909\n14,891 -> 390,515\n930,657 -> 334,61\n630,341 -> 630,85\n671,464 -> 319,112\n949,340 -> 894,285\n663,916 -> 245,916\n114,395 -> 286,223\n335,804 -> 529,804\n567,338 -> 14,891\n623,705 -> 379,949\n82,864 -> 545,401\n932,128 -> 932,134\n291,294 -> 291,101\n739,765 -> 739,757\n460,94 -> 892,94\n375,673 -> 367,681\n81,831 -> 90,831\n890,402 -> 890,138\n775,547 -> 790,547\n49,927 -> 966,10\n23,116 -> 257,116\n923,75 -> 18,980\n63,986 -> 687,362\n369,844 -> 357,844\n790,188 -> 644,188\n557,282 -> 557,669\n861,173 -> 390,644\n480,529 -> 893,529\n32,960 -> 830,162\n368,725 -> 368,40\n502,600 -> 701,600\n63,977 -> 873,167\n463,518 -> 788,193\n738,406 -> 324,406\n162,931 -> 822,931\n377,487 -> 707,817\n610,319 -> 901,319\n586,658 -> 690,658\n25,288 -> 53,288\n760,602 -> 760,628\n294,62 -> 951,62\n222,773 -> 661,334\n151,483 -> 646,483\n272,852 -> 317,852\n557,906 -> 503,960\n736,445 -> 736,703\n241,376 -> 241,692\n835,41 -> 835,369\n987,743 -> 987,210\n42,700 -> 42,244\n646,136 -> 646,440\n544,751 -> 404,751\n295,651 -> 295,805\n687,878 -> 113,878\n290,142 -> 604,142\n579,920 -> 579,807\n12,985 -> 987,10\n919,940 -> 919,808\n770,143 -> 770,832\n114,76 -> 962,76\n876,882 -> 428,434\n861,139 -> 861,320\n888,59 -> 888,39\n629,823 -> 707,823\n296,598 -> 296,305\n61,54 -> 578,54\n864,58 -> 253,58\n71,861 -> 306,861\n682,181 -> 326,537\n307,418 -> 307,910\n810,251 -> 810,431\n151,836 -> 602,385\n954,987 -> 243,276\n724,272 -> 350,646\n134,295 -> 434,295\n178,235 -> 802,859\n832,688 -> 832,573\n165,334 -> 165,378\n816,26 -> 114,728\n668,192 -> 540,192\n730,341 -> 969,341\n951,169 -> 286,834\n647,115 -> 886,115\n664,288 -> 507,131\n609,362 -> 609,295\n747,479 -> 287,19\n350,967 -> 350,725\n117,383 -> 311,383\n871,124 -> 292,124\n654,271 -> 547,271\n525,773 -> 345,953\n401,670 -> 610,670\n930,196 -> 301,825\n336,37 -> 961,662\n714,212 -> 714,667\n454,848 -> 454,107\n587,390 -> 587,577\n530,437 -> 542,437\n304,229 -> 517,229\n340,571 -> 766,571\n727,941 -> 138,352\n831,325 -> 11,325\n241,294 -> 403,456\n788,658 -> 788,126\n337,360 -> 337,589\n799,402 -> 342,402\n530,820 -> 530,319\n982,27 -> 20,989\n923,936 -> 923,721\n581,395 -> 64,912\n61,509 -> 61,827\n989,580 -> 610,580\n477,592 -> 219,592\n296,775 -> 296,58\n204,12 -> 204,457\n190,171 -> 190,673\n939,200 -> 939,457\n472,282 -> 472,631\n983,331 -> 734,331\n365,609 -> 365,817\n640,698 -> 145,698\n103,618 -> 549,618\n454,319 -> 454,346\n650,815 -> 381,546\n624,603 -> 507,603\n966,445 -> 723,445\n763,129 -> 763,784\n695,145 -> 695,511\n498,84 -> 435,147\n188,716 -> 967,716\n810,446 -> 810,924\n731,483 -> 731,51\n307,783 -> 307,533\n15,956 -> 956,15\n192,210 -> 882,210\n303,173 -> 38,438\n769,952 -> 769,863\n135,781 -> 405,781\n494,436 -> 494,892\n705,394 -> 714,394\n164,37 -> 164,633\n813,232 -> 813,620\n227,906 -> 222,906\n542,432 -> 414,432\n549,858 -> 88,397\n200,101 -> 958,859\n235,565 -> 469,331\n492,871 -> 503,882\n704,398 -> 869,563\n450,736 -> 746,736\n420,706 -> 420,635\n717,493 -> 686,524\n187,554 -> 717,24\n31,851 -> 315,851\n800,230 -> 466,230\n226,324 -> 226,614\n937,927 -> 937,798\n143,26 -> 534,417\n952,344 -> 12,344\n181,361 -> 782,361\n925,906 -> 415,396\n685,944 -> 470,944\n200,627 -> 290,627\n728,285 -> 728,326\n271,864 -> 271,34\n802,558 -> 207,558\n963,26 -> 84,905\n504,60 -> 529,60\n840,292 -> 180,292\n914,272 -> 914,330\n82,107 -> 925,950\n33,245 -> 33,134\n463,663 -> 463,82\n27,305 -> 27,675\n276,894 -> 891,279\n746,325 -> 746,948\n249,657 -> 341,749\n530,848 -> 28,346\n798,617 -> 798,609\n119,767 -> 312,767\n80,18 -> 674,18\n723,374 -> 583,374\n582,985 -> 239,642\n217,765 -> 217,395\n811,159 -> 609,159\n689,896 -> 501,896\n562,881 -> 562,96\n244,621 -> 629,621\n277,379 -> 277,287\n856,153 -> 20,153\n518,228 -> 518,898\n230,789 -> 243,789\n534,335 -> 534,592\n240,790 -> 413,617\n768,615 -> 768,560\n773,101 -> 912,101\n252,571 -> 767,56\n370,595 -> 681,906\n565,176 -> 565,318\n750,465 -> 750,724\n979,130 -> 120,989\n160,153 -> 160,785\n610,222 -> 610,191\n873,124 -> 130,867\n519,593 -> 519,32\n525,947 -> 525,562\n50,292 -> 291,533\n558,927 -> 960,525\n536,694 -> 249,981\n954,896 -> 277,896\n732,202 -> 732,288\n447,989 -> 541,895\n890,754 -> 367,231\n368,89 -> 564,285\n588,100 -> 588,156\n282,313 -> 943,974\n16,792 -> 495,792\n111,591 -> 111,493\n57,713 -> 685,85\n676,632 -> 676,575\n560,708 -> 560,602\n489,288 -> 489,404\n904,515 -> 443,54\n70,977 -> 985,62\n11,119 -> 11,403\n215,859 -> 937,137\n78,469 -> 110,437\n747,605 -> 747,369\n847,598 -> 847,299\n742,695 -> 159,112\n986,370 -> 986,460\n631,900 -> 771,760\n228,406 -> 683,861\n189,639 -> 61,639\n221,650 -> 820,650\n558,569 -> 834,845\n655,533 -> 558,630\n967,921 -> 967,169\n230,308 -> 429,308\n873,762 -> 873,528\n412,151 -> 412,538\n881,587 -> 881,21\n941,45 -> 26,960\n377,126 -> 700,126"
		.split("\n")
		.reduce((acc, c) => {
			const [start, end] = c.split(" -> ");
			const plot = {
				x1: Number(start.split(",")[0]),
				y1: Number(start.split(",")[1]),
				x2: Number(end.split(",")[0]),
				y2: Number(end.split(",")[1]),
			};
			return (acc = [...acc, plot]);
		}, []);

const plots = inputs
	.reduce((acc, { x1, y1, x2, y2 }) => {
		if (x1 == x2 || y1 == y2) {
			acc[y1][x1]++;
			acc[y2][x2]++;
			if (y1 == y2) {
				const sortedArray = [x1, x2].sort();
				for (let i = sortedArray[0] + 1; i < sortedArray[1]; i++) {
					acc[y1][i]++;
				}
			} else {
				const sortedArray = [y1, y2].sort();
				for (let i = sortedArray[0] + 1; i < sortedArray[1]; i++) {
					acc[i][x1]++;
				}
			}
		}
		return acc;
	}, array)
	.flat()
	.filter((x) => x >= 2).length;

console.log(plots);