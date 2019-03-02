/*
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
import request from '@/utils/request'

export function fetchNamespaces(tenant, query) {
  return request({
    url: `/namespaces/${tenant}`,
    method: 'get',
    params: { query }
  })
}

export function fetchNamespacePolicies(tenant, namespace, query) {
  return request({
    url: `/namespaces/${tenant}/${namespace}`,
    method: 'get',
    params: { query }
  })
}

export function putNamespace(tenant, namespace, data) {
  return request({
    url: `/namespaces/${tenant}/${namespace}`,
    method: 'put',
    data
  })
}

export function updateNamespace(tenant, namespace, data) {
  return request({
    url: `/namespaces/${tenant}/${namespace}`,
    method: 'post',
    data
  })
}

export function deleteNamespace(namespace) {
  return request({
    url: `/namespaces/${namespace}`,
    method: 'delete'
  })
}