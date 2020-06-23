tag = {
    tag : {
        "head" : ["발열","두통","피로","구토","어지러움","발작","기억력감퇴","수면장애","인지기능저하"], 
        "neck" : ["침삼킬때아픔","부어오름","목마름","기침","가래","혈담","간질간질함"],
        "chest" : ["답답함","호흡곤란","흉통"],
        "arm" : ["무기력함","팔아픔"],
        "stomach" : ["구토","복통","설사","소화불량","혈변","메스꺼움","토혈","변비","속쓰림"],
        "leg" : ["무기력함","다리아픔","혈관돌출"]
    },

    is_available_part : function(given_part) {
        for (var now_part in this.tag) {
            if (given_part === now_part) {
                return true;
            }
        }
        return false;
    },

    is_available_tag : function(given_part, given_tag) {
        if (!this.is_available_part(given_part)) return false;
        if (given_tag === "") return true;

        var tag_splited = given_tag.split("@").slice(1);
        var target_tag = this.tag[given_part];
        
        var second_loop_len = target_tag.length;
        var first_loop_len = tag_splited.length;

        var i_first = 0;
        while (i_first < first_loop_len) {
            var pass = false;
            
            var i_second = 0;
            while (i_second < second_loop_len) {
                if (tag_splited[i_first] === target_tag[i_second]) pass = true;
                i_second = i_second + 1;
            }

            if (!pass) return tag_splited[i_first];
            i_first = i_first + 1;
        }
        
        return true;
    },

    tag_string : function(given_part) {
        if (!this.is_available_part(given_part)) return "";
        
        var loop_len = this.tag[given_part].length;

        var now_string = this.tag[given_part][0];
        var i = 1;
        while (i < loop_len) {
            now_string = now_string + ", " + this.tag[given_part][i];
            i = i + 1;
        }

        return now_string;
    }
}

module.exports = tag;