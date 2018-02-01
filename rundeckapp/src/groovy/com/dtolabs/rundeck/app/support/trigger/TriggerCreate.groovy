/*
 * Copyright 2018 Rundeck, Inc. (http://rundeck.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.dtolabs.rundeck.app.support.trigger

import com.dtolabs.rundeck.core.common.FrameworkResource
import grails.validation.Validateable

@Validateable
class TriggerCreate {
    String project
    String name

    String description
    String conditionType
//    String conditionData
    String actionType
    boolean enabled
//    String actionData

    static constraints = {
        project(nullable: false, matches: FrameworkResource.VALID_RESOURCE_NAME_REGEX)
        name(nullable: true)
        description(nullable: true)
        conditionType(nullable: false, matches: FrameworkResource.VALID_RESOURCE_NAME_REGEX)
        actionType(nullable: false, matches: FrameworkResource.VALID_RESOURCE_NAME_REGEX)
//        enabled(nullable: false)
    }
}
